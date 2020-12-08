import { EntityManager } from 'typeorm';
import { Vote } from '../models';
import { Service } from '../interfaces/Service';
import { injectable, inject } from "inversify";
import { TYPES } from '../di/types';

@injectable()
class VoteService implements Service{
    @inject(TYPES.EntityManager) 
    private entityManager: EntityManager;

    async getVotesCountByUser(userId: number | string){
        const count = await this.entityManager.createQueryBuilder()
            .select("COUNT(votes.id)", "votesCount")
            .from(Vote, "votes")
            .where("votes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export default new VoteService()
export { VoteService }