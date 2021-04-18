import { ActivitySearchParams } from '../../utils/requests/ActivitySearchOptions';
import { Activity } from '../../models';


export interface IActivityService{
    getActivities(options?: ActivitySearchParams): Promise<Activity[]>
    getActivityById(id: number | string): Promise<Activity>
}