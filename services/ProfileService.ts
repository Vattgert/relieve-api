import { getManager, EntityManager } from 'typeorm';

import { Customer } from '../models';

import likeService from './LikesService';
import voteService from './VoteService';

class ProfileService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getProfileById(userId: number | string): Promise<Customer>{
        const likesCount = await likeService.getLikesCountByUser(userId);
        const { votesCount } = await voteService.getVotesCountByUser(userId);

        const profile = await this.#entityManager.createQueryBuilder(Customer, "profile")
            .where("profile.id = :userId", { userId })
            .getOne();

        profile.likesCount = likesCount;
        profile.votesCount = votesCount;

        return profile;
    }
}

export default new ProfileService(getManager())
export { ProfileService }