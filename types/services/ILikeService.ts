import { Like } from '../../models';

export interface ILikeService{
    getLikesCountByActivity(activityId: number | string): Promise<any>;
    getLikesCountByUser(userId: number | string): Promise<any>;
    getActivityLikes(activityId: number | string): Promise<Like[]>
}