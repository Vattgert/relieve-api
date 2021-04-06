import { Vote } from '../models';
import { IVoteService } from '../interfaces/services';
import { injectable } from 'inversify';
import { BaseService } from './BaseService';

@injectable()
class VoteService extends BaseService implements IVoteService{
	async getVotesCountByUser(userId: number | string){
		const count = await this.getManager().createQueryBuilder()
			.select('COUNT(votes.id)', 'votesCount')
			.from(Vote, 'votes')
			.where('votes.user_id = :userId', { userId })
			.getRawOne();
		return count;
	}

	async getVotesCountByActivity(activityId: number | string): Promise<any>{
		const count = await this.getManager().createQueryBuilder()
			.select('COUNT(votes.id)', 'votesCount')
			.from(Vote, 'votes')
			.where('votes.activity_id = :userId', { activityId })
			.getRawOne();
		return count;
	}

	async getVotesByActivity(activityId: number | string): Promise<Vote[]>{
		const votes = await this.getManager().createQueryBuilder(Vote, 'votes')
			.leftJoinAndSelect('votes.voter', 'voter')
			.where('votes.activity_id = :activityId', { activityId });

		return votes.getMany();
	}
}

export { VoteService };