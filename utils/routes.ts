import { Route } from '../interfaces/Route';
import { Router } from 'express';

const API_VERSION = "/v1";

function applyRoutes(routes: Route[], router: Router){
    for (const route of routes) {
      const { method, path, controller } = route;
      (router as any)[method](path, controller.execute);
    }
};

function createRoute(apiVersion: string, topRoute: string, route: string){
  return `${apiVersion}${topRoute}${route}`;
}

export { applyRoutes, createRoute, API_VERSION }