import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('portfolios')
export class Portfolio {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true })
    userId?: number;

    @Column({ nullable: true })
    applicantId?: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column({ nullable: true })
    image?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
