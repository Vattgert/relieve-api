import { Route, TopRoute } from '../interfaces/Route';
import { Router } from 'express';

const API_VERSION = "/v1";

function applyRoutes(topRoutes: TopRoute[], router: Router){
    for (const { path: topPath, routes } of topRoutes) {
      for(const { method, path, controller } of routes){
        (router as any)[method](createRoute(API_VERSION, topPath, path), controller.execute);
      }
    }
};

function createRoute(apiVersion: string, topRoute: string, route: string){
  return `${apiVersion}${topRoute}${route}`;
}

export { applyRoutes, API_VERSION }