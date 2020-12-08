import { inject } from 'inversify';
import { activityControllers } from '../controllers';
import { TYPES } from '../di/types';
import { Controller } from '../interfaces/Controller';

class ActivityRoutes{
    @inject(TYPES.Controller)
    private getActivitiesController: Controller;
}

export { ActivityRoutes }

/*const { 
    getActivitiesController, 
    getActivityController, 
    createActivityController
} = activityControllers

const routes = [
    { 
        path: "/", 
        controller: getActivitiesController, 
        method: "get" 
    },
    { 
        path: "/:activityId", 
        controller: getActivityController, 
        method: "get" },
    { 
        path: "/", 
        controller: createActivityController, 
        method: "post" 
    }
]

export default {
    path: "/activities",
    routes
}*/