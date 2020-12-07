import { Request, Response, NextFunction } from 'express';

interface Controller{
    //Should not return void i suppose
    execute(req: Request, res: Response, next: NextFunction): void
}

export { Controller }