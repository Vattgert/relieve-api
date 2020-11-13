import { categoryControllers } from '../controllers';

const { getTopCategoriesController } = categoryControllers

const routes = [
    { 
        path: "/", 
        controller: getTopCategoriesController, 
        method: "get" 
    },
]

export default {
    path: "/categories",
    routes
}