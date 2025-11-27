import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
    Admin = "admin",
    Employer = "employer",
    Editor = "editor",
    User = "user"
}

export enum Status {
    Active = "active",
    Inactive = "inactive",
    Suspended = "suspended"
}

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

    @Column({ type: 'enum', enum: Role, default: 'user', nullable: true })
    role?: string;

    @Column({ type: 'enum', enum: Status, default: 'active', nullable: true })
    status?: string;

    @Column({ nullable: true })
    instagramId?: string;

    @Column({ nullable: true })
    facebookId?: string;

    @Column({ nullable: true })
    youtubeId?: string;

    @Column({ nullable: true })
    linkedinId?: string;

    @Column({ nullable: true })
    githubId?: string;

    @Column({ default: false })
    isOnline: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    createdAt?: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    updatedAt?: Date;
}