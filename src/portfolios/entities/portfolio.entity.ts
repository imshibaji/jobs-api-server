import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from '../../applicants/applicant.entity';
import { User } from '../../users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('portfolios')
export class Portfolio {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  userId?: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (user) => user.portfolios)
  @JoinColumn({ name: 'userId' })
  user?: User;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true })
  applicantId?: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.portfolios)
  @JoinColumn({ name: 'applicantId' })
  applicant?: Applicant;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  image?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
