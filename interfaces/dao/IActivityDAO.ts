import { Activity } from '../../models/Activity';

interface IActivityDAO{
    getAllActivities(): Promise<Array<Activity>>;
    getActivity(activityId: number): Activity;
    createActivity(activity: Activity): number;
    updateActivity(activity: Activity): number;
    deleteActivity(activityId: number): void;
}

export { IActivityDAO }