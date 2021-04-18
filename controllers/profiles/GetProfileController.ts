import { Controller } from '../../types/Controller';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../di/types';
import { IProfileService } from '../../types/services';

@injectable()
class GetProfileController implements Controller{
	private profileService: IProfileService;

	constructor(
		@inject(TYPES.ProfileService) profileService: IProfileService
	){
		this.profileService = profileService;
	}

	async execute(req: Request, res: Response): Promise<any>{
		const { userId } = req.params;

		const profilePromise = this.profileService.getProfileById(userId);

		profilePromise.then((profile) => {
			if(profile){
				res.send(profile);
			}
		});

		profilePromise.catch((error) => {
			res.send(error);
		});
	}
}

export {
	GetProfileController
};