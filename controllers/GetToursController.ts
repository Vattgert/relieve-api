import { Controller } from '../interfaces/Controller';
import { Request, Response } from 'express';

class GetToursController implements Controller{
    execute(req: Request, res: Response): void{
        res.json([
            { id: 1, title: "Cooking salads", date: "November 9, 2020", image: "https://source.unsplash.com/uQs1802D0CQ",
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/1",
                icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} },
            { id: 2, title: "Rome extensive tour", date: "November 9, 2020", image: "https://source.unsplash.com/VFRTXGw1VjU", 
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/2",
                icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} },
            { id: 3, title: "Woodworking (lets make a sofa)", date: "November 9, 2020", image: "https://source.unsplash.com/IQbC4VU4YPQ",
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/3",
                icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} },
            { id: 4, title: "Making a handmade ring", date: "November 9, 2020", image: "https://source.unsplash.com/hoC_u_9yJ_Y",
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/4",
                icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} },
            { id: 5, title: "Pottering vasa", date: "November 9, 2020", image: "https://source.unsplash.com/P21tYLUo_PI",
                country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
                host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/5",
                icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} }
        ]);
    }
}

export default new GetToursController();
export {
    GetToursController
}