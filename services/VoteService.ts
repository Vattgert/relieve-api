import { getManager, EntityManager } from 'typeorm';
import { Vote } from '../models';

class VoteService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getVotesCountByUser(userId: number | string){
        const count = await this.#entityManager.createQueryBuilder()
            .select("COUNT(votes.id)", "votesCount")
            .from(Vote, "votes")
            .where("votes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export default new VoteService(getManager())
export { VoteService }