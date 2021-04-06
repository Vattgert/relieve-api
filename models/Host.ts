import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Activity } from './Activity';
import { User } from './User';


@Entity('users')
class Host extends User{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Activity, activity => activity.host)
    activities: Activity[];
}

export { Host };