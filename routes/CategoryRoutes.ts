import { categoryControllers } from '../controllers';
import { API_VERSION, createRoute} from '../utils/routes';
const { getTopCategoriesController } = categoryControllers
const topLevelRoute = "/categories";

export default [
    { 
        path: createRoute(API_VERSION, topLevelRoute, "/"), 
        controller: getTopCategoriesController, 
        method: "get" 
    },
]