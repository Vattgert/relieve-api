import { Container } from "inversify";
import { TYPES } from "./types";
import { Service } from "../interfaces/Service";
import { Controller } from '../interfaces/Controller';
import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';
import { IRouter } from '../interfaces/Route';

import { ActivityService, ProfileService, VoteService, LikesService } from "../services";

import { GetActivitiesController } from '../controllers/activities/GetActivitiesController';
import { GetActivityController } from '../controllers/activities/GetActivityController';
import { GetTopCategoriesController } from '../controllers/categories';

import { ActivityRouter, CategoryRouter } from '../routes';

const container = new Container();
/*Bind Routers */
container.bind<IRouter>(TYPES.ActivityRouter).to(ActivityRouter);
container.bind<IRouter>(TYPES.CategoryRouter).to(CategoryRouter);

/* Bind Controllers */
container.bind<Controller>(TYPES.GetActivitiesController).to(GetActivitiesController);
container.bind<Controller>(TYPES.GetActivityController).to(GetActivityController);
container.bind<Controller>(TYPES.GetTopCategoriesController).to(GetTopCategoriesController);

/* Bind Services */
container.bind<IActivityService>(TYPES.ActivityService).to(ActivityService);
container.bind<Service>(TYPES.ProfileService).to(ProfileService);
container.bind<Service>(TYPES.VoteService).to(VoteService);
container.bind<ILikeService>(TYPES.LikeService).to(LikesService);

export { container }