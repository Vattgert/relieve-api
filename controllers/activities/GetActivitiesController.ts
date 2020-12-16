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

    async execute(req: Request, res: Response, next: NextFunction): Promise<any>{
        try{
            const searchParams = this.getActivityParamsFromRequest(req);
            const activities = await activityService.getActivities(searchParams);
            if(activities){
                res.status(200).json(activities)
            } else {
                throw new Error("Error while fetching activities");
            }
        } catch(error) {
            res.send(error);
        }
    }

    getActivityParamsFromRequest(req: Request): ActivitySearchParams{
        const { host, liked, voted, user } = req.query;
        const activitiesParams = new ActivitySearchParams();
        activitiesParams.limit = 20;
        activitiesParams.offset = 0;
        activitiesParams.order = "date";
        activitiesParams.orderType = "desc";
        activitiesParams.host = host ? host.toString() : '';
        activitiesParams.user = user ? user.toString() : '';
        activitiesParams.liked = liked === '';
        activitiesParams.voted = voted === '';
        return new ActivitySearchParams()
    }
}

export default new GetActivitiesController();
export {
    GetActivitiesController
}