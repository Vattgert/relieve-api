import { profileControllers } from '../controllers';

const { getProfileController } = profileControllers;

const routes = [
    { 
        path: "/:userId", 
        controller: getProfileController, 
        method: "get" 
    },
]

export default {
    path: "/profiles",
    routes
}