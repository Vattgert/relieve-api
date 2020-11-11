import { Request, Response } from 'express';

interface Controller{

    execute(req: Request, res: Response): void
}

export { Controller }