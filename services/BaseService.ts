import { injectable } from 'inversify';
import { EntityManager, getManager } from 'typeorm';

@injectable()
class BaseService{
    protected entityManager: EntityManager;

    constructor(){
        this.entityManager = getManager();
    }

    getManager(): EntityManager{
        return this.entityManager;
    }
}

export { BaseService }