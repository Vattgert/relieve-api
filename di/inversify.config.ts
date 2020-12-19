import { Container } from "inversify";
import { TYPES } from "./types";
import { Controller } from '../interfaces/Controller';
import { IActivityService, ILikeService, IVoteService, IProfileService } from '../interfaces/services/';
import { IRouter } from '../interfaces/Route';

import { ActivityService, ProfileService, VoteService, LikesService } from "../services";

import { GetActivitiesController } from '../controllers/activities/GetActivitiesController';
import { GetActivityController } from '../controllers/activities/GetActivityController';
import { GetTopCategoriesController } from '../controllers/categories';
import { GetProfileController } from '../controllers/profiles';

import { ActivityRouter, CategoryRouter, ProfileRouter } from '../routes';

const container = new Container();

/*Bind Routers */
container.bind<IRouter>(TYPES.ActivityRouter).to(ActivityRouter);
container.bind<IRouter>(TYPES.CategoryRouter).to(CategoryRouter);
container.bind<IRouter>(TYPES.ProfileRouter).to(ProfileRouter);

/* Bind Controllers */
container.bind<Controller>(TYPES.GetActivitiesController).to(GetActivitiesController);
container.bind<Controller>(TYPES.GetActivityController).to(GetActivityController);
container.bind<Controller>(TYPES.GetTopCategoriesController).to(GetTopCategoriesController);
container.bind<Controller>(TYPES.GetProfileController).to(GetProfileController);

/* Bind Services */
container.bind<IActivityService>(TYPES.ActivityService).to(ActivityService);
container.bind<IProfileService>(TYPES.ProfileService).to(ProfileService);
container.bind<IVoteService>(TYPES.VoteService).to(VoteService);
container.bind<ILikeService>(TYPES.LikeService).to(LikesService);

export { container }