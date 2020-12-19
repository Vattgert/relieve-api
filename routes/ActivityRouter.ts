import { inject, injectable } from 'inversify';
import { activityControllers } from '../controllers';
import { controllers } from '../di/compositionRoot';
import { TYPES } from '../di/types';
import { Controller } from '../interfaces/Controller';
import { IRouter, Route} from '../interfaces/Route';

@injectable()
class ActivityRouter implements IRouter{
    @inject(TYPES.GetActivitiesController) 
    private getActivitiesController: Controller;

    @inject(TYPES.GetActivityController) 
    private getActivityController: Controller;

    private topPath: string;

    constructor(){
        this.topPath = "/activities";
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