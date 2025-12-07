import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offer {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true })
    applicationId?: number;

    @Column({ nullable: true })
    userId?: number; // Maybe a recruiter ID

    @Column({ nullable: true })
    jobId?: number;

    @Column({ nullable: true })
    letter: string;

    @Column({ nullable: true })
    date: string;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    attachment: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
