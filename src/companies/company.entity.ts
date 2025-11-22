import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    image?: string;

    @Column()
    address?: string;

    @Column()
    city?: string;

    @Column()
    state?: string;

    @Column()
    country?: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    website?: string;

    @Column({ default: false })
    isDeleted: boolean;

    @Column()
    userId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}