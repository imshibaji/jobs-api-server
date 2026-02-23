import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateOfferDto {
  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false })
  id?: number;

  @Field(() => Number)
  @ApiProperty({
    description: 'User ID or Recruiter ID',
    required: false,
    nullable: true,
    default: 1,
  })
  userId: number; // Maybe a recruiter ID

  @Field(() => Number)
  @ApiProperty({
    description: 'Job ID',
    required: false,
    nullable: true,
    default: 1,
  })
  jobId: number;

  @Field(() => Number)
  @ApiProperty({
    description: 'Application ID',
    required: true,
    nullable: false,
    default: 1,
  })
  applicationId: number;

  @Field(() => Number)
  @ApiProperty({
    description: 'Applicant ID',
    required: true,
    nullable: false,
    default: 1,
  })
  applicantId: number;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    description: 'Message',
    type: String,
    required: true,
    default: 'Offer letter',
  })
  message: string;

  @Field(() => String)
  @ApiProperty({
    description: 'Date',
    type: String,
    required: true,
    default: '2022-01-01',
  })
  date: string;

  @Field(() => String)
  @ApiProperty({
    description: 'Status',
    type: String,
    required: true,
    default: 'Pending',
  })
  status: string;

  @Field(() => String)
  @ApiProperty({
    description: 'Type',
    type: String,
    required: true,
    default: 'Offer',
  })
  type: string;

  @Field(() => String)
  @ApiProperty({
    description: 'Attachment',
    type: String,
    required: true,
    default: 'Offer letter pdf',
  })
  attachment: string;
}
