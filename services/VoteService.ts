import { Vote } from '../models';
import { IVoteService } from '../interfaces/services';
import { injectable } from "inversify";
import { BaseService } from './BaseService';

@injectable()
class VoteService extends BaseService implements IVoteService{
    async getVotesCountByUser(userId: number | string){
        const count = await this.entityManager.createQueryBuilder()
            .select("COUNT(votes.id)", "votesCount")
            .from(Vote, "votes")
            .where("votes.user_id = :userId", { userId })
            .getRawOne();
        return count;
    }
}

export { VoteService }