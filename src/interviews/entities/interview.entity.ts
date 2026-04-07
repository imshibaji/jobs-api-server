import { Field, ObjectType } from '@nestjs/graphql';
import { Application } from '../../applications/application.entity';
import { Job } from '../../jobs/job.entity';
import { User } from '../../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Interview {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  jobId?: number;

  @Field(() => Job, { nullable: true })
  @ManyToOne(() => Job, (job) => job.interviews)
  @JoinColumn({ name: 'jobId' })
  job?: Job;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  applicationId?: number;

  @Field(() => Application, { nullable: true })
  @ManyToOne(() => Application, (application) => application.interviews)
  @JoinColumn({ name: 'applicationId' })
  application?: Application;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  userId?: number; // Maybe a recruiter ID

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.interviews)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @Field(() => String, { nullable: true })
  @Column({ type: 'date', nullable: true })
  date: Date;

  @Field(() => String, { nullable: true })
  @Column({ type: 'time', nullable: true })
  time: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  notes?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  feedback?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
