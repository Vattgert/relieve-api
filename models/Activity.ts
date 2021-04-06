import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Tag } from './Tag';
import { Host } from './Host';
import { Vote } from './Vote';
import { Like } from './Like';

@Entity('activities')
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

	@Column({ length: 1000 })
	description: string

	totalLikes: number;
	meanRating: number;

	@ManyToOne(() => Host, host => host.activities)
	@JoinColumn({ name: 'host_id' })
	host: Host;

	@ManyToMany(() => Tag)
	@JoinTable({
		name: 'activity_tags',
		joinColumn: { name: 'activity_id' },
		inverseJoinColumn: { name: 'tag_id' }
	})
	tags: Tag[];

	@OneToMany(() => Vote, vote => vote.activity)
	votes: Vote[];

	@OneToMany(() => Like, like => like.activity)
	@JoinTable({ name: 'likes', joinColumn: { name: 'id' } })
	likes: Like[];
}

export { Activity };