import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Activity } from './Activity';
import { User } from './User';


@Entity("users")
class Host extends User{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Activity, activity => activity.host)
    activities: Activity[];
}

export { Host }