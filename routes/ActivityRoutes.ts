import { activityControllers } from '../controllers';


const { 
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
}