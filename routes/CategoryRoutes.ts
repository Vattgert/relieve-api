import { categoryControllers } from '../controllers';

const { getTopCategoriesController } = categoryControllers

const routes = [
    { 
        path: "/top", 
        controller: getTopCategoriesController, 
        method: "get" 
    },
]

export default {
    path: "/categories",
    routes
}