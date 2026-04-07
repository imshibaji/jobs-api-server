import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateApplicationDto {
  @Field(() => Number)
  @ApiProperty({ description: 'ID of the job being applied for', example: 1 })
  jobId: number;

  @Field(() => Number)
  @ApiProperty({
    description: 'ID of the user applying for the job',
    example: 42,
  })
  userId?: number;

  @Field(() => Number)
  @ApiProperty({ description: 'ID of the applicant', example: 42 })
  applicantId?: number;

  @Field(() => String)
  @ApiProperty({
    description: 'Cover letter of the application',
    example: 'I am very interested in this position because...',
  })
  coverLetter: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    description: 'Additional details provided by the applicant',
    example: 'I have 5 years of experience in...',
    required: false,
  })
  details?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    description: 'Resume of the applicant',
    example: 'Base64EncodedString...',
    required: false,
  })
  resume?: string;

  @Field(() => String)
  @ApiProperty({
    description: 'Current status of the application',
    example: 'Under Review',
  })
  status: string;
}
