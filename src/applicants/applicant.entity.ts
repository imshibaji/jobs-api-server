import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('applicants')
export class Applicant {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;

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

    @Column({ nullable: true, name: 'zip_code' })
    zipCode?: string;

    @Column({ nullable: true })
    bio?: string;

    @Column({ nullable: true })
    dob?: string;

    @Column({ nullable: true })
    gender?: string;

    @Column()
    email!: string;

    @Column({ name: 'phone_number' })
    phoneNumber!: string;

    @Column({ nullable: true })
    skills?: string;

    @Column({ nullable: true })
    experience?: string;

    @Column({ nullable: true })
    location?: string;

    @Column({ nullable: true, name: 'professional_status' })
    professionalStatus?: string;

    @Column({ nullable: true, name: 'highest_education' })
    highestEducation?: string;

    @Column({ nullable: true, name: 'interested_industry' })
    interestedIndustry?: string;

    @Column({ nullable: true, name: 'preferred_work' })
    preferredWork?: string;

    @Column({ nullable: true, name: 'work_tools' })
    workTools?: string;

    @Column({ nullable: true, name: 'work_environments' })
    workEnvironments?: string;

    @Column({ nullable: true, name: 'company_culture' })
    companyCulture?: string;

    @Column({ nullable: true, name: 'preferred_communication' })
    preferredCommunication?: string;

    @Column({ nullable: true, name: 'joining_time' })
    joiningTime?: string;

    @Column({ nullable: true, name: 'expected_monthly_salary' })
    expectedMonthlySalary?: string;

    @Column({ nullable: true })
    resume?: string;

    @Column({ name: 'is_deleted', default: false })
    isDeleted?: boolean;

    @Column({ name: 'user_id', nullable: true })
    userId?: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt!: Date;
}
