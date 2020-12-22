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
            const searchParams = this.getActivitySearchParams(req.query);
            const activities = await this.activityService.getActivities(searchParams);
            res.send(activities);
        } catch(error) {
            res.send({ error: error.message });
        }
    }

    getActivitySearchParams(propertyObject): ActivitySearchParams{
        const searchParams = new ActivitySearchParams(propertyObject);
        console.log(searchParams);
        return searchParams;
    }
}

export {
    GetActivitiesController
}