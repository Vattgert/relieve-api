import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User';

@Entity("users")
class Customer extends User{
    @PrimaryGeneratedColumn({ name: "user_id" })
    id: number;
}

export { Customer }