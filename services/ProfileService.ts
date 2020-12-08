import { Service } from '../interfaces/Service';
import { EntityManager } from 'typeorm';

import { Customer } from '../models';

import voteService from './VoteService';
import { injectable, inject } from "inversify";
import { TYPES } from '../di/types';
import { ILikeService } from '../interfaces/services/ILikeService';

@injectable()
class ProfileService implements Service{
    @inject(TYPES.EntityManager) 
    private entityManager: EntityManager;

    @inject(TYPES.LikeService)
    private likeService: ILikeService;

    async getProfileById(userId: number | string): Promise<Customer>{
        const { likesCount } = await this.likeService.getLikesCountByUser(userId);
        const { votesCount } = await voteService.getVotesCountByUser(userId);

        const profile = await this.entityManager.createQueryBuilder(Customer, "profile")
            .where("profile.id = :userId", { userId })
            .getOne();

        profile.likesCount = likesCount;
        profile.votesCount = votesCount;

        return profile;
    }
}

export default new ProfileService()
export { ProfileService }