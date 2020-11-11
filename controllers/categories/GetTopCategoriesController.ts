import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';

class GetTopCategoriesController implements Controller{
    execute(req: Request, res: Response): void{
        const resourceUrl = "/categories";
        res.json([
            { id: 1, title: "Outdoors", link: `${resourceUrl}/1`},
            { id: 2, title: "DIY", link: `${resourceUrl}/2`},
            { id: 3, title: "Lifestyle", link: `${resourceUrl}/3`},
            { id: 4, title: "Kids", link: `${resourceUrl}/4`},
            { id: 5, title: "Online", link: `${resourceUrl}/5` },
            { id: 100, title: "See all...", link: `${resourceUrl}` }
        ]);
    }
}

export default new GetTopCategoriesController();
export {
    GetTopCategoriesController
}