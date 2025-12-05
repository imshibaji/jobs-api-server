import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Interview {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true })
    applicationId: number;

    @Column({ nullable: true })
    userId: number; // Maybe a recruiter ID

    @Column({ type: 'date', nullable: true })
    date: Date;

    @Column({ type: 'time', nullable: true })
    time: string;

    @Column({ nullable: true })
    location: string;

    @Column({ nullable: true })
    notes?: string;

    @Column({ nullable: true })
    feedback?: string;

    

    @Column({ nullable: true })
    status?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
