import { PostgresConnection, databaseLocalConfig } from '../database/PostgresConnection';
import { IActivityDAO } from '../interfaces/dao/IActivityDAO';
import { Activity } from '../models/Activity';

class ActivityDAO implements IActivityDAO{
    #connection: PostgresConnection;

    constructor(){
        //Make dependency injection;
        this.#connection = new PostgresConnection(databaseLocalConfig);
    }

    async getAllActivities(): Promise<Activity[]>{
        const client = await this.#connection.getPool().connect();
        const queryResult = await client.query("SELECT * FROM activities");
        const result = Promise.resolve(queryResult.rows);
        return result;
    }

    getActivity(activityId: number): Activity {
        throw new Error('Method not implemented.');
    }

    createActivity(activity: Activity): number {
        throw new Error('Method not implemented.');
    }

    updateActivity(activity: Activity): number {
        throw new Error('Method not implemented.');
    }

    deleteActivity(activityId: number): void {
        throw new Error('Method not implemented.');
    }
    
}

export { ActivityDAO }