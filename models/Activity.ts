import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Host } from './Host';

@Entity("activities")
class Activity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    date: string;

    @Column()
    image: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @ManyToOne(() => Host, host => host.activities)
    @JoinColumn({ name: "host_id" })
    host: Host;
}

export { Activity }