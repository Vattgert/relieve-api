import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';

class CreateActivityController implements Controller{
    execute(req: Request, res: Response): void{
        res.status(201).json({
            activity_id: 1
        });
    }
}

export default new CreateActivityController();
export {
    CreateActivityController
}