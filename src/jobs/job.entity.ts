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

    @Column()
    location?: string;

    @Column()
    salary?: number;

    @Column()
    salaryType?: string;

    @Column()
    salaryRange?: string;

    @Column()
    employmentType?: string;

    @Column()
    isRemote?: boolean;

    @Column()
    companyId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column()
    isDeleted?: boolean;
}