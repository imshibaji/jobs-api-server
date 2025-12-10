import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('experiences')
export class Experience {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    company: string;

    @Column()
    position: string;

    @Column({name: 'used_skills' })
    usedSkills?: string;

    @Column()
    location?: string;

    @Column({name: 'start_date', type: 'date' })
    startDate: Date;

    @Column({name: 'end_date',type: 'date', nullable: true })
    endDate?: Date | null;
    
    @Column()
    applicantId: number;
}