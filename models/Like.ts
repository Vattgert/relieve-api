import { Entity, OneToOne, PrimaryColumn, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Activity } from "./Activity";
import { Customer } from "./Customer";

@Entity("likes")
class Like{
    @PrimaryColumn()
    id: number;

    @ManyToOne(() => Activity, activity => activity.likes)
    @JoinColumn({ name: "activity_id"})
    activity: Activity;

    @OneToOne(() => Customer)
    @JoinColumn({ name: "user_id" })
    liker: Customer;

    @CreateDateColumn({ type: "time with time zone", name: "created_at" })
    createdAt: string;
}

export { Like }