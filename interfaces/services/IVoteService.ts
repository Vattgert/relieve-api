export interface IVoteService{
    getVotesCountByUser(userId: string | number): Promise<any>;
}