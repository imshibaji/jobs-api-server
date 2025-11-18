import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ default: false })
    varifiedEmail?: boolean;

    @Column({ unique: true, nullable: true })
    phoneNumber?: string;

    @Column({ nullable: true })
    varifiedPhoneNumber?: boolean;

    @Column()
    password: string;

    @Column({ nullable: true })
    image?: string;

    @Column({ type: 'enum', enum: ['admin', 'user'], default: 'user', nullable: true })
    role?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt?: Date;
}