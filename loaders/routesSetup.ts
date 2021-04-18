import { Express } from 'express';
import { IRouter } from '../types/Route';
import { applyRoutes } from '../utils/routes';

function setupRoutes(app: Express, routers: IRouter[]): void{
	applyRoutes(routers, app);
}

export { setupRoutes };