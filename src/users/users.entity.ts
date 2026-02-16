import { Field, ObjectType } from "@nestjs/graphql";
import { Applicant } from "src/applicants/applicant.entity";
import { Application } from "src/applications/application.entity";
import { Article } from "src/articles/article.entity";
import { Company } from "src/companies/company.entity";
import { Interview } from "src/interviews/entities/interview.entity";
import { Job } from "src/jobs/job.entity";
import { Offer } from "src/offers/entities/offer.entity";
import { Portfolio } from "src/portfolios/entities/portfolio.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
    Admin = "admin",
    Employer = "employer",
    Recruiter = "recruiter",
    Manager = "manager",
    HR = "hr",
    Editor = "editor",
    User = "user"
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
    Suspended = "suspended"
}
@ObjectType()
@Entity('users')
export class User{
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


    @Field(() => [Applicant], { nullable: true })
    @OneToMany(() => Applicant, applicant => applicant.user, { cascade: true })
    applicants?: Applicant[];


    @Field(() => [Job], { nullable: true })
    @OneToMany(() => Job, job => job.user, { cascade: true })
    jobs?: Job[];

    @Field(() => [Application], { nullable: true })
    @OneToMany(() => Application, application => application.user, { cascade: true })
    applications?: Application[];


    @Field(() => [Company], { nullable: true })
    @OneToMany(() => Company, company => company.user, { cascade: true })
    companies?: Company[];

    @Field(() => [Offer], { nullable: true })
    @OneToMany(() => Offer, offer => offer.user, { cascade: true })
    offers?: Offer[];

    @Field(() => [Portfolio], { nullable: true })
    @OneToMany(() => Portfolio, portfolio => portfolio.user, { cascade: true })
    portfolios?: Portfolio[];

    @Field(() => [Interview], { nullable: true })
    @OneToMany(() => Interview, interview => interview.user, { cascade: true })
    interviews?: Interview[];

    @Field(() => [Article], { nullable: true })
    @OneToMany(() => Article, article => article.user, { cascade: true })
    articles?: Article[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt?: Date;
}