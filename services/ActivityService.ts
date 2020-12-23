import { validateOrReject } from 'class-validator';
import { IActivityService } from '../interfaces/services/IActivityService';
import { ActivitySearchParams } from '../utils/requests/ActivitySearchOptions';
import { ILikeService } from '../interfaces/services/ILikeService';
import { Activity } from '../models';
import { injectable, inject } from "inversify";
import { TYPES } from '../di/types';
import { BaseService } from './BaseService';
import { getMessageFromValidationError, isValidationError } from '../utils/error';
import { QueryFailedError } from 'typeorm';
import { IVoteService } from '../interfaces/services';

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
            const activities = await this.getActivitiesQuery(params);
            return activities;
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

    private getActivitiesQuery(params){
        const { limit, offset, order, orderType, host, liked, voted, user } = params;
            
        const activitiesQuery = this.getManager().createQueryBuilder(Activity, "activities")
            .leftJoinAndSelect("activities.host", "host")
            .leftJoinAndSelect("activities.tags", "tags")
            .leftJoin("activities.likes", "likes")
            .leftJoin("likes.liker", "liker")
            .leftJoin("activities.votes", "votes")
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