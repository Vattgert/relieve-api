import { Controller } from './Controller';

type TopRoute = {
    path: string,
    routes: Route[]
}

type Route = {
    path: string,
    method: string,
    controller: Controller
}

interface IRouter{
    getTopRoute(): string;
    getRoutes(): Route[];
}

export { TopRoute, Route, IRouter }