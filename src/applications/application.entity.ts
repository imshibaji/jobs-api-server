import { Field, ObjectType } from "@nestjs/graphql";
import { Applicant } from "src/applicants/applicant.entity";
import { Interview } from "src/interviews/entities/interview.entity";
import { Job } from "src/jobs/job.entity";
import { Offer } from "src/offers/entities/offer.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity('applications')
export class Application {
    @Field(() => Number, { nullable: true })
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => Number)
    @Column()
    userId: number; // Recruiter

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.applications)
    user: User;

    @Field(() => Number)
    @Column()
    jobId: number;

    @Field(() => Job)
    @ManyToOne(() => Job, (job) => job.applications)
    job?: Job; // This will be a relation to the Job entity, but we can keep it as any for now

    @Field(() => Number)
    @Column()
    applicantId: number;

    @Field(() => Applicant)
    @ManyToOne(() => Applicant, (applicant) => applicant.applications)
    applicant: Applicant;

    @Field(() => String)
    @Column()
    coverLetter: string;

    @Field(() => String, { nullable: true })
    @Column()
    details?: string;

    @Field(() => String, { nullable: true })
    @Column()
    resume?: string;

    @Field(() => String)
    @Column()
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Field(() => [Offer], { nullable: true })
    @OneToMany(() => Offer, (offer) => offer.application, { cascade: true })
    offers?: Offer[];

    @Field(() => [Interview], { nullable: true })
    @OneToMany(() => Interview, (interview) => interview.application, { cascade: true })
    interviews?: Interview[];
}