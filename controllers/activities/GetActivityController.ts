import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';
import { IActivityService } from '../../interfaces/services/IActivityService';
import { TYPES } from '../../di/types';
import { inject, injectable } from 'inversify';

@injectable()
class GetActivityController implements Controller{
	@inject(TYPES.ActivityService) 
	private activityService: IActivityService;

	async execute(req: Request, res: Response): Promise<any>{
		const { activityId } = req.params;
		const activityPromise = this.activityService.getActivityById(activityId);
		activityPromise.then(activity => {
			if(activity){
				res.send(activity);
			} else {
				throw new Error('Activity cannot be found');
			}
		}).catch(error => {
			res.send({ 'error': error.message });
		});
	}
}

export default new GetActivityController();
export {
	GetActivityController
};