import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from 'src/applicants/applicant.entity';
import { Application } from 'src/applications/application.entity';
import { Article } from 'src/articles/article.entity';
import { Company } from 'src/companies/company.entity';
import { Interview } from 'src/interviews/entities/interview.entity';
import { Job } from 'src/jobs/job.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { Portfolio } from 'src/portfolios/entities/portfolio.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
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

  @Field(() => Boolean)
  @Column({ default: false })
  verifiedEmail?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ unique: true, nullable: true })
  phoneNumber?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
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
  @Column({ nullable: true })
  youtubeId?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  linkedinId?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  githubId?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  twitterId?: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isOnline: boolean;

  @Field(() => [Applicant], { nullable: 'itemsAndList' })
  @OneToMany(() => Applicant, (applicant) => applicant.user)
  applicants?: Applicant[]; // 👈 No "= []" here anymore!

  @Field(() => [Job], { nullable: 'itemsAndList' })
  @OneToMany(() => Job, (job) => job.user)
  jobs?: Job[];

  @Field(() => [Application], { nullable: 'itemsAndList' })
  @OneToMany(() => Application, (application) => application.user)
  applications?: Application[];

  @Field(() => [Company], { nullable: 'itemsAndList' })
  @OneToMany(() => Company, (company) => company.user)
  companies?: Company[];

  @Field(() => [Offer], { nullable: 'itemsAndList' })
  @OneToMany(() => Offer, (offer) => offer.user)
  offers?: Offer[];

  @Field(() => [Portfolio], { nullable: 'itemsAndList' })
  @OneToMany(() => Portfolio, (portfolio) => portfolio.user)
  portfolios?: Portfolio[];

  @Field(() => [Interview], { nullable: 'itemsAndList' })
  @OneToMany(() => Interview, (interview) => interview.user)
  interviews?: Interview[];

  @Field(() => [Article], { nullable: 'itemsAndList' })
  @OneToMany(() => Article, (article) => article.user)
  articles?: Article[];

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt?: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updatedAt?: Date;
}
