import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateExperienceDto {
  @Field(() => String)
  @ApiProperty({ example: 'Google' })
  company!: string;

  @Field(() => String)
  @ApiProperty({ example: 'Software Engineer' })
  position!: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'San Francisco, CA' })
  location?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'JavaScript, React, Node.js' })
  usedSkills?: string;

  @Field(() => Date)
  @ApiProperty({ example: '2022-01-01' })
  startDate!: Date;

  @Field(() => Date, { nullable: true })
  @ApiProperty({ example: '2022-12-31' })
  endDate?: Date | null;

  @Field(() => Number)
  @ApiProperty({ example: 1 })
  applicantId?: number;
}
