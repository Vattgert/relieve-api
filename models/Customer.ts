import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity("users")
class Customer extends User{
    @PrimaryGeneratedColumn()
    id: number;
}

export { Customer }