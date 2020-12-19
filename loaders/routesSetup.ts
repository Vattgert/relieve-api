import { Express } from 'express';
import { IRouter } from '../interfaces/Route';
import allRoutes from '../routes';
import { applyRoutes } from '../utils/routes';

function setupRoutes(app: Express, routers: IRouter[]){
    applyRoutes(routers, app);
}

export { setupRoutes };