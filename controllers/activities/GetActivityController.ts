import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';
import activityService from '../../services/ActivityService';
import { ActivityService } from '../../services/ActivityService';

class GetActivityController implements Controller{
    #activityService: ActivityService;

    constructor(){
        this.#activityService = activityService;
    }

    async execute(req: Request, res: Response): Promise<any>{
        const { activityId } = req.params;
        const activityPromise = activityService.getActivityById(activityId);
        activityPromise.then(activity => {
            if(activity){
                res.send(activity)
            } else {
                throw new Error("Activity cannot be found")
            }
        }).catch(error => {
            console.log(error);
            res.send({ "error": error.message })
        });
    }
}

export default new GetActivityController();
export {
    GetActivityController
}