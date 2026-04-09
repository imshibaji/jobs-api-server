import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from '../applicants/applicant.entity';
import { Application } from '../applications/application.entity';
import { Article } from '../articles/article.entity';
import { Company } from '../companies/company.entity';
import { Interview } from '../interviews/entities/interview.entity';
import { Job } from '../jobs/job.entity';
import { Offer } from '../offers/entities/offer.entity';
import { Portfolio } from '../portfolios/entities/portfolio.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Role {
  Admin = 'admin',
  Employer = 'employer',
  Recruiter = 'recruiter',
  Manager = 'manager',
  HR = 'hr',
  Editor = 'editor',
  User = 'user',
}

export enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Suspended = 'suspended',
}
@ObjectType()
@Entity('users')
export class User {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ name: 'verified_email', default: false })
  verifiedEmail?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ name: 'phone_number', unique: true, nullable: true })
  phoneNumber?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ name: 'verified_phone_number', default: false, nullable: true })
  verifiedPhoneNumber?: boolean;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', enum: Role, default: 'user', nullable: true })
  role?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'enum', enum: Status, default: 'active', nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  instagramId?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  facebookId?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'youtube_id', nullable: true })
  youtubeId?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'linkedin_id', nullable: true })
  linkedinId?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'github_id', nullable: true })
  githubId?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'twitter_id', nullable: true })
  twitterId?: string;

  @Field(() => Boolean)
  @Column({ name: 'is_online', default: false })
  isOnline: boolean;

  @Field(() => [Applicant!], { nullable: 'itemsAndList' })
  @OneToMany(() => Applicant, (applicant) => applicant.user)
  applicants?: Applicant[]; // 👈 No "= []" here anymore!

  @Field(() => [Job!], { nullable: 'itemsAndList' })
  @OneToMany(() => Job, (job) => job.user)
  jobs?: Job[];

  @Field(() => [Application!], { nullable: 'itemsAndList' })
  @OneToMany(() => Application, (application) => application.user)
  applications?: Application[];

  @Field(() => [Company!], { nullable: 'itemsAndList' })
  @OneToMany(() => Company, (company) => company.user)
  companies?: Company[];

  @Field(() => [Offer!], { nullable: 'itemsAndList' })
  @OneToMany(() => Offer, (offer) => offer.user)
  offers?: Offer[];

  @Field(() => [Portfolio!], { nullable: 'itemsAndList' })
  @OneToMany(() => Portfolio, (portfolio) => portfolio.user)
  portfolios?: Portfolio[];

  @Field(() => [Interview!], { nullable: 'itemsAndList' })
  @OneToMany(() => Interview, (interview) => interview.user)
  interviews?: Interview[];

  @Field(() => [Article!], { nullable: 'itemsAndList' })
  @OneToMany(() => Article, (article) => article.user)
  articles?: Article[];

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt?: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updatedAt?: Date;
}
