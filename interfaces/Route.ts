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

export { TopRoute, Route }