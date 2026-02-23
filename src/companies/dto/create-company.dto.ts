import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateCompanyDto {
  @Field(() => String)
  @ApiProperty({ required: true, example: 'Tech Solutions Ltd.' })
  name: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'John Doe' })
  recruiterName?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Tech' })
  industryType?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: '100-500 employees' })
  companySize?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'https://example.com/logo.png' })
  image?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: '123 Tech Street' })
  address?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Tech City' })
  city?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Tech State' })
  state?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Tech Country' })
  country?: string;

  @Field(() => String)
  @ApiProperty({ required: true, example: '+1234567890' })
  phoneNumber: string;

  @Field(() => String)
  @ApiProperty({ required: true, example: 'qTg9Y@example.com' })
  email: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'https://techsolutions.com' })
  website?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    required: false,
    example: 'https://www.linkedin.com/company/techsolutions',
  })
  linkedinUrl?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    required: false,
    example: 'A leading tech solutions provider.',
  })
  description?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ required: false, example: 'Fast-paced Startup' })
  culture?: string;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ required: false, example: 2010 })
  founded?: number;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({ required: false, example: false })
  isVerified?: boolean;

  @Field(() => Number)
  @ApiProperty({ required: true, example: 1 })
  userId: number;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({ required: false, example: false })
  isDeleted?: boolean;
}
