import { BaseService } from './BaseService';
import { ILikeService } from '../interfaces/services';
import { Like } from '../models';

class LikesService extends BaseService implements ILikeService{

    async getLikesCountByActivity(activityId: number | string): Promise<number>{
        const count = await this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)")
            .from(Like, "likes")
            .where("likes.activity_id = :id", { id: activityId})
            .getRawOne();
        return count;
    }

    async getLikesCountByUser(userId: number | string): Promise<number>{
        const count = await this.getManager().createQueryBuilder()
            .select("COUNT(likes.id)", "likesCount")
            .from(Like, "likes")
            .where("likes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export default new LikesService();
export { LikesService }