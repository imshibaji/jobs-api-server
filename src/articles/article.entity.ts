import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('articles')
export class Article {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column({ unique: true })
  slug: string;

  @Field(() => String)
  @Column()
  content: string;

  @Field(() => String, { nullable: true })
  @Column()
  image?: string;

  @Field(() => String)
  @Column()
  summary: string;

  @Field(() => [String])
  @Column({ type: 'simple-array' })
  tags: string[];

  @Field(() => Number)
  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Field(() => String)
  @Column({ name: 'type', default: 'post' })
  type: string;

  @Field(() => String)
  @Column({ name: 'status', default: 'draft' })
  status: string;

  @Field(() => Boolean)
  @Column({ name: 'is_archived', default: false })
  isArchived: boolean;

  @Field(() => Boolean)
  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  publishedAt?: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}
