import { Field, ObjectType } from '@nestjs/graphql';
import { Application } from 'src/applications/application.entity';
import { Company } from 'src/companies/company.entity';
import { Interview } from 'src/interviews/entities/interview.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('jobs')
export class Job {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  requirements: string;

  @Field(() => String)
  @Column()
  responsibilities: string;

  @Field(() => String)
  @Column()
  benefits: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  skills?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  experience?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  currency?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  salary?: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'salary_type' })
  salaryType?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'salary_range' })
  salaryRange?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'employment_type' })
  employmentType?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  isRemote?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  referenceLink?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'work_arrangement' })
  workArrangement?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'equipment_policy' })
  equipmentPolicy?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'time_to_hire' })
  timeToHire?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'using_tools' })
  usingTools?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'company_offerings' })
  companyOfferings?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'onboard_support' })
  onboardSupport?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'career_restarters' })
  careerRestarters?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  notes?: string;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, name: 'company_id' })
  companyId: number;

  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.jobs)
  company?: Company;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, name: 'user_id' })
  userId?: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.jobs)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Field(() => [Application], { nullable: 'itemsAndList' })
  @OneToMany(() => Application, (application) => application.job)
  applications?: Application[]; // This will be a relation to the Application entity, but we can keep it as any for now

  @Field(() => [Interview], { nullable: true })
  @OneToMany(() => Interview, (interview) => interview.job)
  interviews?: Interview[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => Boolean)
  @Column({ type: 'boolean', default: false })
  isDeleted?: boolean;

  @Field(() => [Offer], { nullable: true })
  @OneToMany(() => Offer, (offer) => offer.job)
  offers?: Offer[];
}
