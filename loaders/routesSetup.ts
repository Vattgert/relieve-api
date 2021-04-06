import { Express } from 'express';
import { IRouter } from '../interfaces/Route';
import { applyRoutes } from '../utils/routes';

function setupRoutes(app: Express, routers: IRouter[]): void{
	applyRoutes(routers, app);
}

export { setupRoutes };