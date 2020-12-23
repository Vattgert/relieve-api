import { ILikeService } from '../interfaces/services/ILikeService';
import { Like } from '../models';
import { injectable } from "inversify";

import { BaseService } from './BaseService';

@injectable()
class LikesService extends BaseService implements ILikeService{

    async getLikesCountByActivity(activityId: number | string){
        const count = await this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
        return count;
    }

    async getActivityLikes(activityId: number | string): Promise<Like[]>{
        const likes = await this.getManager().createQueryBuilder(Like, "like")
            .leftJoinAndSelect("like.liker", "liker")
            .where("like.activity_id = :activityId", { activityId })
            .take(5)
        return likes.getMany();
    }

    async getLikesCountByUser(userId: number | string){
        const count = await this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)", "likesCount")
            .from(Like, "likes")
            .where("likes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export { LikesService }