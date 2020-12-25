import { injectable, inject } from "inversify";
import { TYPES } from '../di/types';

import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';
import { IVoteService } from '../interfaces/services';

import { BaseService } from './BaseService';
import { Activity } from '../models';
import { ActivitySearchParams } from '../utils/requests/ActivitySearchOptions';

import { validateOrReject } from 'class-validator';

@injectable()
class ActivityService extends BaseService implements IActivityService{
    private likesService: ILikeService;
    private votesService: IVoteService;

    constructor(
        @inject(TYPES.LikeService) likesService: ILikeService,
        @inject(TYPES.VoteService) votesService: IVoteService
    ){
        super();
        this.likesService = likesService;
        this.votesService = votesService;
    }

    async getActivities(params: ActivitySearchParams): Promise<Activity[]> {
        try{
            await validateOrReject(params);
            return this.getActivitiesQuery(params);
        } catch (error) {
            const errorMessage = this.getProperErrorMessage(error);
            throw new Error(errorMessage);
        }
    }

    async getActivityById(id: number | string): Promise<Activity>{
        try{
            const { count } = await this.likesService.getLikesCountByActivity(id);
            const likes = await this.likesService.getActivityLikes(id);
            const votes = await this.votesService.getVotesByActivity(id);
            const activity = await this.getActivityQuery(id);

            activity.totalLikes = count;
            activity.likes = likes;
            activity.votes = votes;

            return activity;
        } catch(error) {
            const errorMessage = this.getProperErrorMessage(error);
            throw new Error(errorMessage);
        }
    }

    private getActivitiesQuery(params: ActivitySearchParams): Promise<Activity[]>{
        const { limit, offset, order, orderType, host, liked, voted, user } = params;
            
        const activitiesQuery = this.getManager().createQueryBuilder(Activity, "activities")
            .leftJoinAndSelect("activities.host", "host")
            .leftJoinAndSelect("activities.tags", "tags")
            .leftJoin("activities.likes", "likes")
            .leftJoin("likes.liker", "liker")
            .leftJoinAndSelect("activities.votes", "votes")
            .leftJoin("votes.voter", "voter")
            .orderBy(`activities.${order}`, orderType)
            .take(limit)
            .skip(offset);

        if(host) activitiesQuery.andWhere("host.id = :host", { host });
        if(user && liked) activitiesQuery.andWhere("liker.id = :liker", { liker: user });
        if(user && voted) activitiesQuery.andWhere("voter.id = :voter", { voter: user });

        return activitiesQuery.getMany();
    }

    private getActivityQuery(activityId: number | string): Promise<Activity>{
        return this.getManager().createQueryBuilder(Activity, "activity")
            .leftJoinAndSelect("activity.host", "host")
            .leftJoinAndSelect("activity.tags", "tags")
            .where("activity.id = :activityId", { activityId })
            .getOne();
    }
}

export { ActivityService }