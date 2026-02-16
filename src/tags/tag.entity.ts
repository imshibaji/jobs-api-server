import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity('tags')
export class Tag{
    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column({ unique: true })
    slug: string;

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    description?: string;

    @Field(() => Boolean, { nullable: true })
    @Column({ default: false })
    isDeleted?: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}