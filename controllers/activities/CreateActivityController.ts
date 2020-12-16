import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';

class CreateActivityController implements Controller{
    async execute(req: Request, res: Response): Promise<any>{
        res.status(201).json({
            activity_id: 1
        });
    }
}

export default new CreateActivityController();
export {
    CreateActivityController
}