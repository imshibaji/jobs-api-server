import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateJobDto {
  @Field(() => String)
  @ApiProperty({
    example: 'Software Engineer',
    description: 'The title of the job',
  })
  title!: string;

  @Field(() => String)
  @ApiProperty({
    example: 'Develop and maintain software applications.',
    description: 'The description of the job',
  })
  description!: string;

  @Field(() => String)
  @ApiProperty({
    example: "Bachelor's degree in Computer Science or related field.",
    description: 'The requirements for the job',
  })
  requirements!: string;

  @Field(() => String)
  @ApiProperty({
    example: 'Design, code, test, and deploy software solutions.',
    description: 'The responsibilities of the job',
  })
  responsibilities!: string;

  @Field(() => String)
  @ApiProperty({
    example: 'Health insurance, 401(k), paid time off.',
    description: 'The benefits of the job',
  })
  benefits!: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Software Engineer',
    description: 'The skills required for the job',
    required: false,
  })
  skills?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'New York, NY',
    description: 'The location of the job',
    required: false,
  })
  location?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: '1 year',
    description: 'The experience required for the job',
    required: false,
  })
  experience?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'USD',
    description: 'The currency of the salary',
    required: false,
  })
  currency?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 80000,
    description: 'The salary for the job',
    required: false,
  })
  salary?: number;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Annual',
    description: 'The type of salary',
    required: false,
  })
  salaryType?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: '$70,000 - $90,000',
    description: 'The salary range for the job',
    required: false,
  })
  salaryRange?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Full-time',
    description: 'The employment type of the job',
    required: false,
  })
  employmentType?: string;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({
    example: true,
    description: 'Indicates if the job is remote',
    required: false,
  })
  isRemote?: boolean;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'https://example.com/job',
    description: 'The link to the job',
    required: false,
  })
  referenceLink?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Full-time',
    description: 'The work arrangement of the job',
    required: false,
  })
  workArrangement?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Company provides hardware',
    description: 'The equipment policy of the job',
    required: false,
  })
  equipmentPolicy?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: '2 weeks',
    description: 'The time to hire for the job',
    required: false,
  })
  timeToHire?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Company provides training',
    description: 'The training policy of the job',
    required: false,
  })
  usingTools?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Flexible working hours',
    description: 'The working hours policy of the job',
    required: false,
  })
  companyOfferings?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Yes (Mentor provided)',
    description: 'The Onboarding policy of the job',
    required: false,
  })
  onboardSupport?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'Yes, we actively encourage it',
    description: 'The Career Restarters policy of the job',
    required: false,
  })
  careerRestarters?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example:
      'Yes, we actively encourage it. Please reach out to us if you have any questions.',
    description: 'Notes about the job',
    required: false,
  })
  notes?: string;

  @Field(() => Number)
  @ApiProperty({
    example: 1,
    description: 'The ID of the company posting the job',
  })
  companyId?: number;

  @Field(() => Number)
  @ApiProperty({
    example: 1,
    description: 'The ID of the user posting the job',
  })
  userId?: number;
}
