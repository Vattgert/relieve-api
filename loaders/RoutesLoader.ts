import { Controller } from '../types/Controller';

class RoutesLoader{
	private controllers: Controller[];

	constructor(controllers){
		this.controllers = controllers;
	}
}

export { RoutesLoader };