import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('applications')
export class Application {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    userId: number; // Recruiter

    @Column()
    jobId: number;

    @Column()
    applicantId: number;

    @Column()
    coverLetter: string;

    @Column()
    details?: string;

    @Column()
    resume?: string;

    @Column()
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}