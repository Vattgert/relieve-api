import { Controller } from './Controller';

type Route = {
    path: string,
    method: string,
    controller: Controller
}

export { Route }