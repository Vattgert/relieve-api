import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn, OneToOne, } from 'typeorm';
import { Activity } from './Activity';
import { Customer } from './Customer';

@Entity('votes')
class Vote{

    @PrimaryColumn({ select: false })
    id: number;

    @Column({ name: 'host_evaluation' })
    hostEvaluation: number;

    @Column({ name: 'content_evaluation' })
    contentEvaluation: number;

    @Column({ name: 'satisfaction_evaluation' })
    satisfactionEvalution: number;

    @Column({ name: 'value_for_money_evaluation' })
    valueForMoneyEvaluation: number;

    @ManyToOne(() => Activity, activity => activity.votes)
    @JoinColumn({ name: 'activity_id' })
    activity: Activity;

    @OneToOne(() => Customer)
    @JoinColumn({ name: 'user_id' })
    voter: Customer;
}

export { Vote };