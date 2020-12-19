import { container } from "./inversify.config";
import { TYPES } from "./types";

import { Service } from "../interfaces/Service";
import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';
import { IRouter } from '../interfaces/Route';
import { Controller } from "../interfaces/Controller";

let activityService = container.get<IActivityService>(TYPES.ActivityService);
let likeService = container.get<ILikeService>(TYPES.LikeService);
let voteService = container.get<Service>(TYPES.VoteService);
let profileService = container.get<Service>(TYPES.ProfileService);

const getActivitiesController = container.get<Controller>(TYPES.GetActivitiesController);
const getActivityController = container.get<Controller>(TYPES.GetActivityController);

const activityRouter = container.get<IRouter>(TYPES.ActivityRouter);
console.log(activityRouter);

console.log(activityRouter);

const services = {
    activityService, 
    likeService, 
    voteService, 
    profileService
}

const routers = [
    activityRouter
]

const activityControllers = {
    getActivitiesController,
    getActivityController
}

const controllers = {
    activityControllers, 
}

export {
    services, controllers, routers
}
