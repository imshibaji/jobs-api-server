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
    salary?: number;

    @Column({ nullable: true, name: 'salary_type' })
    salaryType?: string;

    @Column({ nullable: true, name: 'salary_range'})
    salaryRange?: string;

    @Column({ nullable: true, name: 'employment_type' })
    employmentType?: string;

    @Column({ nullable: true })
    isRemote?: boolean;

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