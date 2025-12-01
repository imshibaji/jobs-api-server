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

    @Column({ name: 'last_used', type: 'timestamp', nullable: true })
    lastUsed?: Date;

    @Column()
    applicantId: number;

    @Column({ default: false })
    isDeleted?: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}