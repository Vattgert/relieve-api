import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsUrl } from 'class-validator';

abstract class User {

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @IsUrl()
    avatar: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    company: string;

}

export { User }