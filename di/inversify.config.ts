import { Container } from "inversify";
import { TYPES } from "./types";
import { Service } from "../interfaces/Service";
import { Controller } from '../interfaces/Controller';
import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';
import { IRouter } from '../interfaces/Route';

import { GetActivitiesController } from '../controllers/activities/GetActivitiesController';
import { GetActivityController } from '../controllers/activities/GetActivityController';

import { ActivityService, ProfileService, VoteService, LikesService } from "../services";

import { ActivityRouter } from '../routes/ActivityRouter';

const container = new Container();

/* Bind Services */
container.bind<IActivityService>(TYPES.ActivityService).to(ActivityService);
container.bind<Service>(TYPES.ProfileService).to(ProfileService);
container.bind<Service>(TYPES.VoteService).to(VoteService);
container.bind<ILikeService>(TYPES.LikeService).to(LikesService);

/* Bind Controllers */
container.bind<Controller>(TYPES.GetActivitiesController).to(GetActivitiesController);
container.bind<Controller>(TYPES.GetActivityController).to(GetActivityController);

/*Bind Routers */
container.bind<IRouter>(TYPES.ActivityRouter).to(ActivityRouter);

export { container }