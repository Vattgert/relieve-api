
import { getManager, EntityManager } from 'typeorm';
import { Activity } from '../models';

class ActivityService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getTopActivities(){
        const activities = await this.#entityManager.find(Activity, { relations: ["host", "hostInfo"]});
        return activities;
    }
}

export default new ActivityService(getManager());
export { ActivityService }