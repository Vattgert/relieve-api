import { container } from './inversify.config';
import { TYPES } from './types';

import { IRouter } from '../types/Route';


const activityRouter = container.get<IRouter>(TYPES.ActivityRouter);
const categoryRouter = container.get<IRouter>(TYPES.CategoryRouter);
const profileRouter = container.get<IRouter>(TYPES.ProfileRouter);

const routers = [
	activityRouter,
	categoryRouter,
	profileRouter
];

export {
	routers
};