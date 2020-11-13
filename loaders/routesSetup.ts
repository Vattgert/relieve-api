import { Express } from 'express';
import allRoutes from '../routes';
import { applyRoutes } from '../utils/routes';

function setupRoutes(app: Express){
    applyRoutes(allRoutes, app);
}

export { setupRoutes };