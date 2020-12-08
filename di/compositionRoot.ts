import { container } from "./inversify.config";
import { TYPES } from "./types";

import { EntityManager } from 'typeorm';

import { Service } from "../interfaces/Service";
import { IActivityService } from '../interfaces/services/IActivityService';
import { ILikeService } from '../interfaces/services/ILikeService';
import { Controller } from "../interfaces/Controller";

let entityManager = container.get<EntityManager>(TYPES.EntityManager);
let activityService = container.get<IActivityService>(TYPES.ActivityService);
let likeService = container.get<ILikeService>(TYPES.LikeService);
let voteService = container.get<Service>(TYPES.VoteService);
let profileService = container.get<Service>(TYPES.ProfileService);

const getActivitiesController = container.get<Controller>(TYPES.Controller);
