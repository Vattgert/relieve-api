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
    }

    async execute(req: Request, res: Response, next: NextFunction): Promise<any>{
        try{
            const searchParams = this.getActivitySearchParams(req);
            const activities = await this.activityService.getActivities(searchParams);
            res.send(activities);
        } catch(error) {
            res.send({ error });
        }
    }

    getActivitySearchParams(req): ActivitySearchParams{
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
        return searchParams;
    }
}

export {
    GetActivitiesController
}