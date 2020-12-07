import { Controller } from '../../interfaces/Controller';
import { Request, Response, NextFunction } from 'express';
import activityService from '../../services/ActivityService';
import { ActivityService } from '../../services/ActivityService';
import { ActivitySearchParams } from '../../utils/requests/ActivitySearchOptions';

class GetActivitiesController implements Controller{
    #activityService: ActivityService;

    constructor(){
        this.#activityService = activityService;
    }

    execute(req: Request, res: Response, next: NextFunction): void{
        const { host, liked, voted, user } = req.query;
        const searchParams = new ActivitySearchParams();
        searchParams.limit = 20;
        searchParams.offset = 0;
        searchParams.order = "date";
        searchParams.orderType = "desc";
        searchParams.host = host ? host.toString() : '';
        searchParams.user = user ? user.toString() : '';
        searchParams.liked = liked === '';
        searchParams.voted = voted === '';

        const activitiesPromise = activityService.getActivities(searchParams);
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