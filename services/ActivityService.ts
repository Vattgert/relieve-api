import { IActivityDAO } from '../interfaces/dao/IActivityDAO';
import { ActivityDAO } from '../dal/ActivityDAO';
import { Activity } from '../models/Activity';

class ActivityService{
    #activityDAO: IActivityDAO;

    constructor(activityDAO: IActivityDAO){
        this.#activityDAO = activityDAO;
    }

    async getTopActivities(): Promise<Activity[]>{
        const activities = await this.#activityDAO.getAllActivities();
        console.log(activities);
        return activities;
    }
}

export default new ActivityService(new ActivityDAO());
export { ActivityService }