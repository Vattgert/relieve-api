import { inject, injectable } from 'inversify';
import { TYPES } from '../di/types';
import { Controller } from '../types/Controller';
import { IRouter, Route} from '../types/Route';

@injectable()
class CategoryRouter implements IRouter{
	private getTopCategoriesController: Controller;

	private topPath: string;

	constructor(
		@inject(TYPES.GetTopCategoriesController) getTopCategoriesController: Controller,
	){
		this.topPath = '/categories';
		this.getTopCategoriesController = getTopCategoriesController;
	}

	getTopRoute(): string{
		return this.topPath;
	}

	getRoutes(): Route[]{
		return [
			{ 
				path: '/top', 
				controller: this.getTopCategoriesController, 
				method: 'get' 
			},
		];
	}
}

export { CategoryRouter };