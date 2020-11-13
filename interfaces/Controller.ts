import { Request, Response, NextFunction } from 'express';

interface Controller{

    execute(req: Request, res: Response, next: NextFunction): void
}

export { Controller }