
import { getManager, EntityManager } from 'typeorm';
import { ActivitySearchParams } from '../utils/requests/ActivitySearchOptions';
import { Activity } from '../models';
import likesService from '../services/LikesService';

class ActivityService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getActivities(options: ActivitySearchParams): Promise<Activity[]> {
        const { limit, offset, order, orderType, host, liked, voted, user } = options;
        const activitiesQuery = this.#entityManager.createQueryBuilder(Activity, "activities")
            .leftJoinAndSelect("activities.host", "host")
            .leftJoinAndSelect("activities.tags", "tags")
            .leftJoin("activities.likes", "likes").limit(5)
            .leftJoin("likes.liker", "liker")
            .leftJoin("activities.votes", "votes")
            .leftJoin("votes.voter", "voter")
            .limit(limit)
            .offset(offset)
            .orderBy(order, "DESC");

        if(host) activitiesQuery.andWhere("host.id = :host", { host });
        if(user && liked) activitiesQuery.andWhere("liker.id = :liker", { liker: user });
        if(user && voted) activitiesQuery.andWhere("voter.id = :voter", { voter: user });

        const activities = activitiesQuery.getMany();
        return activities;
    }

    async getActivityById(id: number | string): Promise<Activity>{
        const { count } = await likesService.getLikesCountByActivity(id);
        const activity = await this.#entityManager.createQueryBuilder(Activity, "activity")
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

export default new ActivityService(getManager());
export { ActivityService }