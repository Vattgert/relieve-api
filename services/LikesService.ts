import { ILikeService } from '../interfaces/services/ILikeService';
import { EntityManager } from 'typeorm';
import { Like } from '../models';
import { injectable, inject } from "inversify";
import { TYPES } from '../di/types';

@injectable()
class LikesService implements ILikeService{
    @inject(TYPES.EntityManager) 
    private entityManager: EntityManager;

    async getLikesCountByActivity(activityId: number | string){
        const count = await this.entityManager.createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
        return count;
    }

    async getLikesCountByUser(userId: number | string){
        const count = await this.entityManager.createQueryBuilder()
            .select("COUNT(likes.id)", "likesCount")
            .from(Like, "likes")
            .where("likes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export { LikesService }