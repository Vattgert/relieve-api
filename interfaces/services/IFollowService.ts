export interface IFollowService{
    getUserFollowers(userId: string | number): Promise<any>
    getUserFollowings(userId: string | number): Promise<any>;
    followUser(userId: string | number);
    unfollowUser(userId: string | number);
}