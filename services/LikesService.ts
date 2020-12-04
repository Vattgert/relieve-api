import { getManager, EntityManager } from 'typeorm';
import { Like } from '../models';

class LikesService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getLikesByActivity(activityId: number | string){
        const count = await this.#entityManager.createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
        return count;
    }
}

export default new LikesService(getManager())
export { LikesService }