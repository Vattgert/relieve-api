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

@injectable()
class ActivityService extends BaseService implements IActivityService{
    public likesService: ILikeService;

    constructor(
        @inject(TYPES.LikeService) likesService: ILikeService
    ){
        super();
        this.likesService = likesService;
    }

    async getActivities(params: ActivitySearchParams): Promise<Activity[]> {
        try{
            await validateOrReject(params);

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

            const activities = await activitiesQuery.getMany();
            return activities;
        } catch (error) {
            const errorMessage = this.getProperErrorMessage(error);
            throw new Error(errorMessage);
        }
    }

    async getActivityById(id: number | string): Promise<Activity>{
        const { count } = await this.likesService.getLikesCountByActivity(id);
        const activity = await this.getManager().createQueryBuilder(Activity, "activity")
            .leftJoinAndSelect("activity.host", "host")
            .leftJoinAndSelect("activity.tags", "tags")
            .leftJoinAndSelect("activity.votes", "votes").limit(20)
            .leftJoinAndSelect("votes.voter", "voter")
            .leftJoinAndSelect("activity.likes", "likes").limit(5)
            .leftJoinAndSelect("likes.liker", "liker")
            .where("activity.id = :id", { id: id })
            .getOne();
        activity.totalLikes = count;

        return activity;
    }
}

export { ActivityService }