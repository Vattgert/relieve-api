
import { getManager, EntityManager } from 'typeorm';
import { Activity } from '../models';

class ActivityService{
    #entityManager: EntityManager;

    constructor(entiryManager: EntityManager){
        this.#entityManager = entiryManager;
    }

    async getTopActivities(options = {
        take: 20,
        skip: 0,
        order: {
            column: "date",
            type: "DESC"
        }
    }): Promise<Activity[]>{
        const { take, skip, order: { column, type } } = options;
        return this.#entityManager.find(Activity, 
            { 
                relations: ["host"], 
                take, skip, 
                order: { [column]: type } 
            }
        );
    }
}

export default new ActivityService(getManager());
export { ActivityService }