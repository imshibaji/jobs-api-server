import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Applicant } from 'src/applicants/applicant.entity';

@InputType()
export class CreateSkillDto {
  @Field(() => String)
  @ApiProperty({ example: 'JavaScript' })
  name: string;

  @Field(() => String)
  @ApiProperty({ example: 'Advanced' })
  proficiency: string;

  @Field(() => String)
  @ApiProperty({ example: '3 years' })
  experience: string;

  @Field(() => Date, { nullable: true })
  @ApiProperty({ example: '2022-01-01' })
  lastUsed?: Date;

  @Field(() => Number)
  @ApiProperty({ example: 1 })
  applicantId: number;

  @Field(() => Boolean)
  @ApiProperty({ example: false })
  isDeleted: boolean;
}
