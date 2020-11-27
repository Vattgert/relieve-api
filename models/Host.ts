import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Activity } from './Activity';
import { Customer } from './Customer';

@Entity("hosts")
class Host{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Customer)
    @JoinColumn({ name: "user_id" })
    hostInfo: Customer;

    @OneToMany(() => Activity, activity => activity.host)
    activities: Activity[];
}

export { Host }