import { Customer } from '../models';

import { injectable, inject } from 'inversify';
import { TYPES } from '../di/types';
import { ILikeService, IProfileService, IVoteService } from '../interfaces/services/';

import { BaseService } from './BaseService';

@injectable()
class ProfileService extends BaseService implements IProfileService{

	private likeService: ILikeService;
	private voteService: IVoteService;

	constructor(
		@inject(TYPES.LikeService) likeService: ILikeService,
		@inject(TYPES.VoteService) voteService: IVoteService
	){
		super();
		this.likeService = likeService;
		this.voteService = voteService;
	}

	async getProfileById(userId: number | string): Promise<Customer>{
		const { likesCount } = await this.likeService.getLikesCountByUser(userId);
		const { votesCount } = await this.voteService.getVotesCountByUser(userId);

		const profile = await this.getManager().createQueryBuilder(Customer, 'profile')
			.where('profile.id = :userId', { userId })
			.getOne();

		profile.likesCount = likesCount;
		profile.votesCount = votesCount;

		return profile;
	}
}

export { ProfileService };