import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('applications')
export class Application {
    @PrimaryGeneratedColumn()
    id?: number;

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

    @Column({ type: 'date', nullable: true })
    interviewDate?: Date;

    @Column({ type: 'time', nullable: true })
    interviewTime?: string;

    @Column({ nullable: true })
    interviewLocation?: string;

    @Column({ nullable: true })
    feedback?: string;

    @Column({ nullable: true })
    offerLetter?: string;

    @Column({ type: 'date', nullable: true })
    offerDate?: Date;

    @Column({ type: 'date', nullable: true })
    joiningDate?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}