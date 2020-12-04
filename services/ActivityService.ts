
import { getManager, EntityManager } from 'typeorm';
import { Activity } from '../models';
import likesService from '../services/LikesService';

class ActivityService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getTopActivities(options = {
        take: 20,
        skip: 0,
        order: {
            column: "date",
            type: "DESC"
        }
    }): Promise<Activity[]> {
        const { take, skip, order: { column, type } } = options;
        return this.#entityManager.find(Activity, 
            { 
                relations: ["host", "tags"], 
                take, skip, 
                order: { [column]: type } 
            }
        );
    }

    async getActivityById(id: number | string): Promise<Activity>{
        const { count } = await likesService.getLikesByActivity(id);
        const activity = await this.#entityManager.createQueryBuilder(Activity, "activity")
            .leftJoinAndSelect("activity.host", "host")
            .leftJoinAndSelect("activity.tags", "tags")
            .leftJoinAndSelect("activity.votes", "votes")
            .leftJoinAndSelect("votes.voter", "voter")
            .leftJoinAndSelect("activity.likes", "likes")
            .leftJoinAndSelect("likes.liker", "liker")
            .where("activity.id = :id", { id: id })
            .getOne();
        activity.totalLikes = count;
        
        return activity;
    }
}

export default new ActivityService(getManager());
export { ActivityService }