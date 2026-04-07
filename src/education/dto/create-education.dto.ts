import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateEducationDto {
  @Field(() => String)
  @ApiProperty()
  institution: string;

  @Field(() => String)
  @ApiProperty()
  degree: string;

  @Field(() => String)
  @ApiProperty()
  fieldOfStudy: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false })
  grade?: string;

  @Field(() => Number, { nullable: true })
  @ApiProperty({name: 'applicant_id', default: 1 })
  applicantId?: number;

  @Field(() => Date)
  @ApiProperty()
  startDate: Date;

  @Field(() => Date, { nullable: true })
  @ApiProperty({ required: false })
  endDate?: Date;
}
