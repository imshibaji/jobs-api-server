import { Field, ObjectType } from '@nestjs/graphql';
import { Application } from '../applications/application.entity';
import { Education } from '../education/education.entity';
import { Experience } from '../experiences/experience.entity';
import { Offer } from '../offers/entities/offer.entity';
import { Portfolio } from '../portfolios/entities/portfolio.entity';
import { Skill } from '../skills/skill.entity';
import { User } from '../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('applicants')
export class Applicant {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  image?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  address?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'zip_code' })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  dob?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  gender?: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  skills?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  experience?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  location?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'professional_status' })
  professionalStatus?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'highest_education' })
  highestEducation?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'interested_industry' })
  interestedIndustry?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'preferred_work' })
  preferredWork?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'work_tools' })
  workTools?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'work_environments' })
  workEnvironments?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'company_culture' })
  companyCulture?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'preferred_communication' })
  preferredCommunication?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'joining_time' })
  joiningTime?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'expected_monthly_salary' })
  expectedMonthlySalary?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  resume?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ default: false })
  isDeleted?: boolean;

  @Field(() => Number, { nullable: true })
  @Column()
  userId?: number;

  @ManyToOne(() => User, (user) => user.applicants)
  @JoinColumn({ name: 'userId' })
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [Application], { nullable: true })
  @OneToMany(() => Application, (application) => application.applicant)
  applications?: Application[]; // This will be a relation to the Application entity, but we can keep it as any for now

  @Field(() => [Education], { nullable: true })
  @OneToMany(() => Education, (education) => education.applicant)
  educations?: Education[];

  @Field(() => [Experience], { nullable: true })
  @OneToMany(() => Experience, (exp) => exp.applicant)
  experiences?: Experience[];

  @Field(() => [Skill], { nullable: true })
  @OneToMany(() => Skill, (skill) => skill.applicant)
  skillList?: Skill[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => [Offer], { nullable: true })
  @OneToMany(() => Offer, (offer) => offer.applicant)
  offers?: Offer[];

  @Field(() => [Portfolio], { nullable: true })
  @OneToMany(() => Portfolio, (portfolio) => portfolio.applicant)
  portfolios?: Portfolio[];
}
