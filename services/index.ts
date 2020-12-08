import { LikesService } from './LikesService';
import { VoteService } from './VoteService';
import { ActivityService } from './ActivityService';
import { ProfileService } from './ProfileService';

const allServices = [ 
    LikesService, ActivityService, VoteService, ProfileService
]

export default allServices;
export {
    ActivityService,
    VoteService,
    LikesService,
    ProfileService
}