import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column({ unique: true })
    slug: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ default: false })
    isDeleted?: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}