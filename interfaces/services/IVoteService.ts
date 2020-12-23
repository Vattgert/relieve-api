import { Vote } from "../../models";

export interface IVoteService{
    getVotesCountByUser(userId: string | number): Promise<any>;
    getVotesByActivity(activityId: string | number): Promise<Vote[]>;
    getVotesCountByActivity(activityId: number | string): Promise<any>;
}