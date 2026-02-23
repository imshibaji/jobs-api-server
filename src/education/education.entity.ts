import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from 'src/applicants/applicant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Education {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  institution: string;

  @Field(() => String)
  @Column()
  degree: string;

  @Field(() => String)
  @Column()
  fieldOfStudy: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  grade?: string;

  @Field(() => Number, { nullable: true })
  @Column({ name: 'applicant_id', nullable: true })
  applicantId?: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.educations)
  applicant?: Applicant; // This will be a relation to the Applicant entity, but we can keep it as any for now

  @Column({ name: 'start_date', type: 'date' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date', nullable: true })
  endDate: Date;
}
