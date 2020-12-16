interface ILikeService{
    getLikesCountByActivity(activityId: number | string): Promise<number>;
    getLikesCountByUser(userId: number | string): Promise<number>;
}

export { ILikeService }