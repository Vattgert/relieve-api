import { Controller } from '../interfaces/Controller';
import { Request, Response } from 'express';

class LoginController implements Controller{
    execute(req: Request, res: Response): void{
        res.json({ user_id: "228" });
    }
}

export default new LoginController();
export {
    LoginController
}