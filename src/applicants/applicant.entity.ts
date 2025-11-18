import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applicants')
export class Applicant {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    image?: string;

    @Column()
    address?: string;

    @Column()
    city?: string;

    @Column()
    state?: string;

    @Column()
    country?: string;

    @Column()
    dob?: string;

    @Column()
    gender: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    resume?: string;

    @Column()
    isDeleted?: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
