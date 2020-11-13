import { activityControllers } from '../controllers';
import { API_VERSION, createRoute} from '../utils/routes';

const { 
    getActivitiesController, 
    getActivityController, 
    createActivityController
} = activityControllers

const topLevelRoute = "/activities"

export default [
    { 
        path: createRoute(API_VERSION, topLevelRoute, "/"), 
        controller: getActivitiesController, 
        method: "get" 
    },
    { 
        path: createRoute(API_VERSION, topLevelRoute, "/:activityId"), 
        controller: getActivityController, 
        method: "get" },
    { 
        path: createRoute(API_VERSION, topLevelRoute, "/"), 
        controller: createActivityController, 
        method: "post" 
    }
]