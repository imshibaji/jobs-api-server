import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from '../../applicants/applicant.entity';
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
export class Offer {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  applicationId?: number;

  @Field(() => Application, { nullable: true })
  @ManyToOne(() => Application, (application) => application.offers)
  @JoinColumn({ name: 'applicationId' })
  application?: Application;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  applicantId?: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.offers)
  @JoinColumn({ name: 'applicantId' })
  applicant?: Applicant;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  userId?: number; // Maybe a recruiter ID

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  jobId?: number;

  @Field(() => Job, { nullable: true })
  @ManyToOne(() => Job, (job) => job.offers)
  @JoinColumn({ name: 'jobId' })
  job: Job;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  message: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  date: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  type: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  attachment: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
