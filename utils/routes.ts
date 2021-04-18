import { IRouter } from '../types/Route';
import { Router } from 'express';

const API_VERSION = '/v';

async function applyRoutes(routers: IRouter[], expressRouter: Router): Promise<void>{
	for (const router of routers) {
		const routerTopPath = router.getTopRoute();
		for(const { method, path, controller } of router.getRoutes()){
			const executeController = controller.execute;
			(expressRouter as any)[method](createRoute(API_VERSION, routerTopPath, path), executeController.bind(controller));
		}
	}
}

function createRoute(apiVersion: string, topRoute: string, route: string){
	return `${apiVersion}${topRoute}${route}`;
}

export { applyRoutes, API_VERSION };