import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/types';

import { Controller } from '../../interfaces/Controller';
import { IActivityService } from '../../interfaces/services/IActivityService';
import { ActivitySearchParams } from '../../utils/requests/ActivitySearchOptions';

import { Request, Response, NextFunction } from 'express';


@injectable()
class GetActivitiesController implements Controller{ 
    @inject(TYPES.ActivityService) 
    public activityService: IActivityService;

    async execute(req: Request, res: Response, next: NextFunction): Promise<any>{
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
        //Temporarily type cast
        //console.log(this.activityService);
        res.send({ lol: "lol" });
        /*const activitiesPromise = activityService.getActivities(searchParams);
        activitiesPromise.then(activities => {
            res.json(activities);
        }).catch(error => {
            console.log(error);
        });*/
    }
}

export {
    GetActivitiesController
}