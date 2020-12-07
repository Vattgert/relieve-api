import { getManager, EntityManager } from 'typeorm';
import { Like } from '../models';

class LikesService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getLikesCountByActivity(activityId: number | string){
        const count = await this.#entityManager.createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
        return count;
    }

    async getLikesCountByUser(userId: number | string){
        const count = await this.#entityManager.createQueryBuilder()
            .select("COUNT(likes.id)", "likesCount")
            .from(Like, "likes")
            .where("likes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export default new LikesService(getManager())
export { LikesService }