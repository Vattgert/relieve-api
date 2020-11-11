import { Express } from 'express';
import * as routes from '../routes/';

const API_VERSION = '/v1';

function getRouteWithApiVersion(route: string){
    return `${API_VERSION}${route}`;
}

function setupRoutes(app: Express){
    app.use(getRouteWithApiVersion("/activities"), routes.activityRouter);
    app.use(getRouteWithApiVersion("/categories"), routes.categoryRouter);
}

export { setupRoutes };