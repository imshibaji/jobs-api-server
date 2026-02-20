import { Field, ObjectType } from "@nestjs/graphql";
import { Job } from "src/jobs/job.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity('companies')
export class Company {
    @Field(() => Number, { nullable: true })
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true, name: 'recruiter_name' })
    recruiterName?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true, name: 'industry_type' })
    industryType?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true, name: 'size' })
    size?: string;

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
    @Column({ nullable: true })
    zipCode?: string;

    @Field(() => String)
    @Column()
    phoneNumber: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    website?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true, name: 'linkedin_url' })
    linkedinUrl?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    description?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    culture?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    founded?: number;

    @Field(() => Boolean)
    @Column({ default: false })
    isVerified: boolean;

    @Field(() => Boolean)
    @Column({ default: false })
    isDeleted: boolean;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true, name: 'user_id' })
    userId?: number;

    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, (user) => user.companies, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @Field(() => [Job], { nullable: true })
    @OneToMany(() => Job, (job) => job.company, { cascade: true })
    jobs: Job[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}