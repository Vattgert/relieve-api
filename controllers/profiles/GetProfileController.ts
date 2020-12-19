import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';
import profileService from '../../services/ProfileService';

class GetProfileController implements Controller{
    async execute(req: Request, res: Response): Promise<any>{
        const { userId } = req.params;

        const profilePromise = profileService.getProfileById(userId);

        profilePromise.then((profile) => {
            if(profile){
                res.send(profile);
            }
        })

        profilePromise.catch((error) => {
            res.send(error);
        })
    }
}

export default new GetProfileController();
export {
    GetProfileController
}