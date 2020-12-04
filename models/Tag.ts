import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Activity } from "./Activity";


@Entity("tags")
class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Activity)
    @JoinTable({
        name: "activity_tags",
        joinColumn: { name: "tag_id" },
        inverseJoinColumn: { name: "activity_id" }
    })
    activities: Activity[];
}

export { Tag }