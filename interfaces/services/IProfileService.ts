import { Customer } from '../../models';

export interface IProfileService{
    getProfileById(userId: string | number): Promise<Customer>
}