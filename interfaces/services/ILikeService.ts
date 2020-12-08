export interface ILikeService{
    getLikesCountByActivity(activityId: number | string): Promise<any>;
    getLikesCountByUser(userId: number | string): Promise<any>;
}