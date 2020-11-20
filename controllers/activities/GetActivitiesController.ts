import { Controller } from '../../interfaces/Controller';
import { Request, Response, NextFunction } from 'express';
import activityService from '../../services/ActivityService';
import { ActivityService } from '../../services/ActivityService';

class GetActivitiesController implements Controller{
    #activityService: ActivityService;

    constructor(){
        this.#activityService = activityService;
    }

    execute(req: Request, res: Response, next: NextFunction): void{
        const activitiesPromise = activityService.getTopActivities();
        activitiesPromise.then(activities => {
            res.json(activities);
        }).catch(error => {
            console.log(error);
        });
    }
}

export default new GetActivitiesController();
export {
    GetActivitiesController
}