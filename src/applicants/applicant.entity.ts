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

    @Column({ nullable: true })
    zipCode?: string;

    @Column({ nullable: true })
    bio?: string;

    @Column({ nullable: true })
    dob?: string;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column({ nullable: true })
    skills?: string;

    @Column({ nullable: true })
    experience?: string;

    @Column({ nullable: true })
    location?: string;

    @Column()
    resume?: string;

    @Column()
    isDeleted?: boolean;

    @Column()
    userId?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
