import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from '../applicants/applicant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('experiences')
export class Experience {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: string;

  @Field(() => String)
  @Column()
  company: string;

  @Field(() => String)
  @Column()
  position: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'used_skills' })
  usedSkills?: string;

  @Field(() => String, { nullable: true })
  @Column()
  location?: string;

  @Field(() => Date)
  @Column({ name: 'start_date', type: 'date' })
  startDate: Date;

  @Field(() => Date, { nullable: true })
  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate?: Date | null;

  @Field(() => String, { nullable: true })
  @Column()
  applicantId?: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.experiences)
  @JoinColumn({ name: 'applicantId' })
  applicant?: Applicant;
}
