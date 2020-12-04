import { Entity, OneToOne, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Activity } from "./Activity";
import { Customer } from "./Customer";

@Entity("likes")
class Like{
    @PrimaryColumn({ select: false })
    id: number;

    @ManyToOne(() => Activity, activity => activity.likes)
    @JoinColumn({ name: "activity_id"})
    activity: Activity;

    @OneToOne(() => Customer)
    @JoinColumn({ name: "user_id" })
    liker: Customer;
}

export { Like }