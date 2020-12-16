import { Activity } from '../../models';
import { ActivitySearchParams } from '../../utils/requests/ActivitySearchOptions';

interface IActivityService{
    getActivities(options: ActivitySearchParams): Promise<Activity[]>;
    getActivityById(id: number | string): Promise<Activity>;
}

export { IActivityService }