import { injectable } from 'inversify';
import { EntityManager, getManager } from 'typeorm';
import { getMessageFromValidationError, isValidationError } from '../utils/error';
import { QueryFailedError } from 'typeorm';

@injectable()
class BaseService{
	private entityManager: EntityManager;

	constructor(){
		this.entityManager = getManager();
	}

	protected getManager(): EntityManager{
		return this.entityManager;
	}

	protected getProperErrorMessage(error): string{
		let errorMessage = 'Unexpected error occured';
		if(isValidationError(error)){   
			errorMessage = getMessageFromValidationError(error);
		} else if(error instanceof QueryFailedError){
			errorMessage = 'Error occured while retrieving activities.';
		}
		return errorMessage;
	}
}

export { BaseService };