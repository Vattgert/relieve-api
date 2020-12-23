import { ILikeService } from '../interfaces/services/ILikeService';
import { Like } from '../models';
import { injectable } from "inversify";

import { BaseService } from './BaseService';

@injectable()
class LikesService extends BaseService implements ILikeService{

    async getLikesCountByActivity(activityId: number | string){
        return await this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
    }

    async getActivityLikes(activityId: number | string): Promise<Like[]>{
        return this.getManager().createQueryBuilder(Like, "like")
            .leftJoinAndSelect("like.liker", "liker")
            .where("like.activity_id = :activityId", { activityId })
            .orderBy("like.createdAt", "DESC")
            .take(5)
            .getMany();
    }

    async getLikesCountByUser(userId: number | string){
        return this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)", "likesCount")
            .from(Like, "likes")
            .where("likes.user_id = :userId", { userId })
            .getRawOne();
    }
}

export { LikesService }