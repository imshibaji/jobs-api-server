import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('skills')
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    proficiency: string;

    @Column()
    experience: string;

    @Column()
    applicantId: number;

    @Column()
    isDeleted: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}