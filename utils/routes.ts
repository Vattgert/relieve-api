import { Route, TopRoute, IRouter } from '../interfaces/Route';
import { Router } from 'express';

const API_VERSION = "/v1";

function applyRoutes(routers: IRouter[], expressRouter: Router){
    for (const router of routers) {
      const routerTopPath = router.getTopRoute()
      for(const { method, path, controller } of router.getRoutes()){
        (expressRouter as any)[method](createRoute(API_VERSION, routerTopPath, path), controller.execute);
      }
    }
};

function createRoute(apiVersion: string, topRoute: string, route: string){
  return `${apiVersion}${topRoute}${route}`;
}

export { applyRoutes, API_VERSION }