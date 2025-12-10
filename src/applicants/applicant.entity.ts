import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applicants')
export class Applicant {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    image?: string;

    @Column({ nullable: true })
    address?: string;

    @Column({ nullable: true })
    city?: string;

    @Column({ nullable: true })
    state?: string;

    @Column({ nullable: true })
    country?: string;

    @Column({ nullable: true })
    zipCode?: string;

    @Column({ nullable: true })
    bio?: string;

    @Column({ nullable: true })
    dob?: string;

    @Column({ nullable: true })
    gender?: string;

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

    @Column({ nullable: true })
    resume?: string;

    @Column({ default: false })
    isDeleted?: boolean;

    @Column({ nullable: true })
    userId?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
