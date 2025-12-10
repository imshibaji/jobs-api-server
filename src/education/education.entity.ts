import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Education {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    institution: string;

    @Column()
    degree: string;

    @Column()
    fieldOfStudy: string;

    @Column({ nullable: true })
    grade?: string;

    @Column({ name: 'applicant_id', nullable: true })
    applicantId?: number;

    @Column({name: 'start_date', type: 'date' })
    startDate: Date;

    @Column({name: 'end_date', type: 'date', nullable: true })
    endDate: Date;
}