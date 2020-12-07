import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsUrl } from 'class-validator';

abstract class User {

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: "last_name" })
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

    myActivitiesCount: number;
    likesCount: number;
    votesCount: number;

}

export { User }