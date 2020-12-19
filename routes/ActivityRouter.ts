import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { Controller } from '../interfaces/Controller';
import { IRouter, Route} from '../interfaces/Route';

@injectable()
class ActivityRouter implements IRouter{
    private getActivitiesController: Controller;
    private getActivityController: Controller;

    private topPath: string;

    constructor(
        @inject(TYPES.GetActivitiesController) getActivitiesController: Controller,
        @inject(TYPES.GetActivityController) getActivityController: Controller
    ){
        this.topPath = "/activities";
        this.getActivitiesController = getActivitiesController;
        this.getActivityController = getActivityController;
    }

    getTopRoute(): string{
        return this.topPath;
    }

    getRoutes(): Route[]{
        return [
            { 
                path: "/", 
                controller: this.getActivitiesController, 
                method: "get" 
            },
            { 
                path: "/:activityId", 
                controller: this.getActivityController, 
                method: "get" },
            /*{ 
                path: "/", 
                controller: "createActivityController", 
                method: "post" 
            }*/
        ]
    }
}

export { ActivityRouter }