import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Applicant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    resume: string;
}
