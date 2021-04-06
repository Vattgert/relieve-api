import { Controller } from '../interfaces/Controller';

class RoutesLoader{
	private controllers: Controller[];

	constructor(controllers){
		this.controllers = controllers;
	}
}

export { RoutesLoader };