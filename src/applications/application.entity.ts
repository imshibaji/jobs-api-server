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

  @Field(() => Number!, { nullable: true })
  @Column({ name: 'user_id', nullable: true })
  userId?: number; // Recruiter

  @Field(() => User!, { nullable: true })
  @ManyToOne(() => User, (user) => user.applications)
  user?: User;

  @Field(() => Number!, { nullable: true })
  @Column({ name: 'job_id', nullable: true })
  jobId?: number;

  @Field(() => Job!, { nullable: true })
  @ManyToOne(() => Job, (job) => job.applications)
  job?: Job; // This will be a relation to the Job entity, but we can keep it as any for now

  @Field(() => Number!, { nullable: true })
  @Column({ name: 'applicant_id', nullable: true })
  applicantId?: number;

  @Field(() => Applicant!, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.applications)
  applicant?: Applicant;

  @Field(() => String)
  @Column({ name: 'cover_letter' })
  coverLetter!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  details?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  resume?: string;

  @Field(() => String)
  @Column()
  status!: string;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;

  @Field(() => [Offer!], { nullable: true })
  @OneToMany(() => Offer, (offer) => offer.application)
  offers?: Offer[];

  @Field(() => [Interview!], { nullable: true })
  @OneToMany(() => Interview, (interview) => interview.application)
  interviews?: Interview[];
}
