import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('jobs')
export class Job{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    requirements: string;

    @Column()
    responsibilities: string;

    @Column()
    benefits: string;

    @Column({ nullable: true })
    skills?: string;

    @Column({ nullable: true })
    location?: string;

    @Column({ nullable: true })
    experience?: string;

    @Column({ nullable: true })
    currency?: string;

    @Column({ nullable: true })
    salary?: number;

    @Column({ nullable: true, name: 'salary_type' })
    salaryType?: string;

    @Column({ nullable: true, name: 'salary_range'})
    salaryRange?: string;

    @Column({ nullable: true, name: 'employment_type' })
    employmentType?: string;

    @Column({ nullable: true })
    isRemote?: boolean;

    @Column({ nullable: true })
    referenceLink?: string;

    @Column({ nullable: true, name: 'work_arrangement'})
    workArrangement?: string;

    @Column({ nullable: true, name: 'equipment_policy'})
    equipmentPolicy?: string;

    @Column({ nullable: true, name: 'time_to_hire'})
    timeToHire?: string;

    @Column({ nullable: true, name: 'using_tools'})
    usingTools?: string;

    @Column({ nullable: true, name: 'company_offerings'})
    companyOfferings?: string;

    @Column({ nullable: true, name: 'onboard_support'})
    onboardSupport?: string;

    @Column({ nullable: true, name: 'career_restarters'})
    careerRestarters?: string;

    @Column({ nullable: true })
    notes?: string;

    @Column({ nullable: true, name: 'company_id' })
    companyId: number;

    @Column({ nullable: true, name: 'user_id' })
    userId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ type: 'boolean', default: false })
    isDeleted?: boolean;
}