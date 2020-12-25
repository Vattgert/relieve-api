import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { Controller } from '../interfaces/Controller';
import { IRouter, Route} from '../interfaces/Route';

@injectable()
class ProfileRouter implements IRouter{
    private getProfileController: Controller;

    private topPath: string;

    constructor(
        @inject(TYPES.GetProfileController) getProfileController: Controller,
    ){
        this.topPath = "/users";
        this.getProfileController = getProfileController;
    }

    getTopRoute(): string{
        return this.topPath;
    }

    getRoutes(): Route[]{
        return [
            { 
                path: "/:userId", 
                controller: this.getProfileController, 
                method: "get" 
            },
            {
                path: "/:userId/followers", 
                controller: this.getProfileController, 
                method: "get" 
            },
            {
                path: "/:userId/followings", 
                controller: this.getProfileController, 
                method: "get" 
            }
        ]
    }
}

export { ProfileRouter }