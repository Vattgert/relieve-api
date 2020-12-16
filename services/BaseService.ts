import { getManager, EntityManager } from 'typeorm';

abstract class BaseService{
    private entityManager: EntityManager;

    constructor(){
        this.entityManager = getManager();
    }

    public getManager(): EntityManager{
        return this.entityManager;
    }
}

export { BaseService };