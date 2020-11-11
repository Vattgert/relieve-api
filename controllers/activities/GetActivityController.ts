import { Controller } from '../../interfaces/Controller';
import { Request, Response } from 'express';

class GetActivityController implements Controller{
    execute(req: Request, res: Response): void{
        res.json([
            { 
                id: 1, title: "Cooking salads", date: "November 9, 2020", image: "https://source.unsplash.com/uQs1802D0CQ",
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { 
                    firstname: "Ivan", 
                    lastname: "Tsiupa", 
                    fullname: "Ivan Tsiupa",
                     profileLink: "/profile/1",
                    icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                } 
            }
        ]);
    }
}

export default new GetActivityController();
export {
    GetActivityController
}