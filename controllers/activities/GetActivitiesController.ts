import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/types';

import { Controller } from '../../interfaces/Controller';
import { IActivityService } from '../../interfaces/services/IActivityService';
import { ActivitySearchParams } from '../../utils/requests/ActivitySearchOptions';

import { Request, Response, NextFunction } from 'express';


@injectable()
class GetActivitiesController implements Controller{ 
    public activityService: IActivityService;

    constructor(
        @inject(TYPES.ActivityService) activityService: IActivityService
    ){
        this.activityService = activityService;
        console.log("This is GetActivitiesController:")
        console.log(this);
        console.log("GetActivitiesController -> ActivityService")
        console.log(this.activityService);
    }

    async execute(req: Request, res: Response, next: NextFunction): Promise<any>{
        console.log("execute controller");
        console.log(this);
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
        //res.send({ lol: "lol" });

        try{
            console.log(this.activityService);
            const activities = await this.activityService.getActivities(searchParams);
            res.send(activities);
        } catch(error) {
            console.log(error);
            res.send({ error })
        }
    }
}

export {
    GetActivitiesController
}