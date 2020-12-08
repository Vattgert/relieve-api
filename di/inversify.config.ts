import { Container } from "inversify";
import { TYPES } from "./types";
import { EntityManager, getManager } from 'typeorm';
import { Service } from "../interfaces/Service";
import { Controller } from '../interfaces/Controller';
import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';

import { GetActivitiesController } from '../controllers/activities/GetActivitiesController';

import { ActivityService, ProfileService, VoteService, LikesService } from "../services";

const manager = getManager();
const container = new Container();

/*Bind Data Access Layer */
container.bind<EntityManager>(TYPES.EntityManager).toConstantValue(manager);

/* Bind Services */
container.bind<IActivityService>(TYPES.ActivityService).to(ActivityService);
container.bind<Service>(TYPES.ProfileService).to(ProfileService);
container.bind<Service>(TYPES.VoteService).to(VoteService);
container.bind<ILikeService>(TYPES.LikeService).to(LikesService);

/* Bind Controllers */
container.bind<Controller>(TYPES.Controller).to(GetActivitiesController);

export { container }