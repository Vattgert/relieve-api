import { IFollowService } from '../interfaces/services';
import { BaseService } from "./BaseService";

class FollowService extends BaseService implements IFollowService {
    getUserFollowers(userId: string | number): Promise<any> {
        throw new Error('Method not implemented.');
    }
    getUserFollowings(userId: string | number): Promise<any> {
        throw new Error('Method not implemented.');
    }
    followUser(userId: string | number) {
        throw new Error('Method not implemented.');
    }
    unfollowUser(userId: string | number) {
        throw new Error('Method not implemented.');
    }
}
