import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateInterviewDto {
  @Field(() => Number, { nullable: true })
  @ApiProperty({
    type: Number,
    required: false,
    description: 'interview id',
    example: 1,
  })
  id?: number;

  @Field(() => Number)
  @ApiProperty({
    type: Number,
    required: true,
    description: 'job id',
    example: 1,
  })
  jobId?: number;

  @Field(() => Number)
  @ApiProperty({
    type: Number,
    required: true,
    description: 'application id',
    example: 1,
  })
  applicationId?: number;

  @Field(() => Number)
  @ApiProperty({
    type: Number,
    required: true,
    description: 'user id',
    example: 1,
  })
  userId?: number;

  @Field(() => Date)
  @ApiProperty({
    type: Date,
    required: true,
    description: 'interview date',
    example: '2022-01-01',
  })
  date: Date;

  @Field(() => String)
  @ApiProperty({
    type: String,
    required: true,
    description: 'interview time',
    example: '10:00',
  })
  time: string;

  @Field(() => String)
  @ApiProperty({
    type: String,
    required: true,
    description: 'interview location',
    example: 'New York',
  })
  location: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'interview notes',
    example: 'Interview notes',
  })
  notes?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'interview feedback',
    example: 'Interview feedback',
  })
  feedback?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'interview status',
    example: 'Scheduled',
  })
  status?: string;
}
