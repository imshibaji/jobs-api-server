import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from '../applicants/applicant.entity';
import { Interview } from '../interviews/entities/interview.entity';
import { Job } from '../jobs/job.entity';
import { Offer } from '../offers/entities/offer.entity';
import { User } from '../users/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('applications')
export class Application {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Number)
  @Column({ nullable: true })
  userId?: number; // Recruiter

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.applications)
  user?: User;

  @Field(() => Number)
  @Column({ nullable: true })
  jobId?: number;

  @Field(() => Job, { nullable: true })
  @ManyToOne(() => Job, (job) => job.applications)
  job?: Job; // This will be a relation to the Job entity, but we can keep it as any for now

  @Field(() => Number)
  @Column({ nullable: true })
  applicantId?: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.applications)
  applicant?: Applicant;

  @Field(() => String)
  @Column()
  coverLetter: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  details?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  resume?: string;

  @Field(() => String)
  @Column()
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Field(() => [Offer], { nullable: true })
  @OneToMany(() => Offer, (offer) => offer.application)
  offers?: Offer[];

  @Field(() => [Interview], { nullable: true })
  @OneToMany(() => Interview, (interview) => interview.application)
  interviews?: Interview[];
}
