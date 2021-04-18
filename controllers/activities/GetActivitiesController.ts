import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/types';

import { Controller } from '../../types/Controller';
import { IActivityService } from '../../types/services/IActivityService';
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
			res.status(200).send(activities);
		} catch(error) {
			res.status(500).send({ error: error.message });
		}
	}

	getActivitySearchParams(propertyObject): ActivitySearchParams{
		const searchParams = new ActivitySearchParams(propertyObject);
		return searchParams;
	}
}

export {	
	GetActivitiesController
};