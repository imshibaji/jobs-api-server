import { Field, ObjectType } from '@nestjs/graphql';
import { Applicant } from 'src/applicants/applicant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('skills')
export class Skill {
  @Field(() => Number, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  proficiency: string;

  @Field(() => String)
  @Column()
  experience: string;

  @Field(() => String, { nullable: true })
  @Column({ name: 'last_used', type: 'timestamp', nullable: true })
  lastUsed?: Date;

  @Field(() => Number)
  @Column()
  applicantId: number;

  @Field(() => Applicant, { nullable: true })
  @ManyToOne(() => Applicant, (applicant) => applicant.skillList)
  applicant?: Applicant;

  @Field(() => Boolean)
  @Column({ default: false })
  isDeleted?: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
