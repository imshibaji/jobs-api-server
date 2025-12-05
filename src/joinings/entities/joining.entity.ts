import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Joining {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    jobId: number;

    @Column()
    userId: number;

    @Column()
    applicantId: number;

    @Column()
    applicationId: number;

    @Column()
    letter: string;

    @Column()
    date: string;

    @Column()
    time: string;
    
    @Column()
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;
}
