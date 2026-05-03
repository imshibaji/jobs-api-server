import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('feedbacks')
export class Feedback {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Number, { nullable: true })
  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'table_name', nullable: true })
  tableName?: string;

  @Field(() => Number, { nullable: true })
  @Column({ name: 'table_id', nullable: true })
  tableId?: number;

  @Field(() => String)
  @Column({ nullable: false })
  name!: string;

  @Field(() => String)
  @Column({ nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'org_name', nullable: true })
  orgName?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  avatar?: string;

  @Field(() => Number)
  @Column({ nullable: false })
  rating!: number;

  @Field(() => String)
  @Column({ nullable: false })
  comment!: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'status', nullable: true })
  status?: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: string;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt!: string;
}
