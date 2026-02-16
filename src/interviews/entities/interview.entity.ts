import { Field, ObjectType } from "@nestjs/graphql";
import { Application } from "src/applications/application.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Interview {
    @Field(() => Number, { nullable: true })
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    applicationId: number;

    @Field(() => Application, { nullable: true })
    @ManyToOne(() => Application, (application) => application.interviews)
    application: Application;

    @Field(() => Number, { nullable: true })
    @Column({ nullable: true })
    userId: number; // Maybe a recruiter ID

    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, (user) => user.interviews)
    user: User;

    @Field(() => String, { nullable: true })
    @Column({ type: 'date', nullable: true })
    date: Date;

    @Field(() => String, { nullable: true })
    @Column({ type: 'time', nullable: true })
    time: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    location: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    notes?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    feedback?: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    status?: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
