import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column({ nullable: true, name: 'recruiter_name' })
    recruiterName?: string;

    @Column({ nullable: true, name: 'industry_type' })
    industryType?: string;

    @Column({ nullable: true, name: 'company_size' })
    companySize?: string;

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

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    website?: string;

    @Column({ default: false })
    isDeleted: boolean;

    @Column({ nullable: true, name: 'user_id' })
    userId?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}