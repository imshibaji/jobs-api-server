import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateApplicantDto {
  @Field(() => Number, { nullable: true })
  @ApiProperty({ example: 1 })
  id?: number;

  @Field(() => String)
  @ApiProperty({ example: 'Jane Doe' })
  name: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'https://example.com/image.jpg' })
  image?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '123 Main St' })
  address?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Springfield' })
  city?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'IL' })
  state?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'USA' })
  country?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '12345' })
  zipCode?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    example: 'I am a software developer with 5 years of experience.',
  })
  bio?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '1990-01-01' })
  dob?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Female' })
  gender?: string;

  @Field(() => String)
  @ApiProperty({ example: 'jane@example.com' })
  email: string;

  @Field(() => String)
  @ApiProperty({ example: '+1-555-1234' })
  phoneNumber: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'JavaScript, React, Node.js' })
  skills?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '2 years' })
  experience?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '123 Main St' })
  location?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Employed' })
  professionalStatus?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: "Bachelor's Degree in Computer Science" })
  highestEducation?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Information Technology' })
  interestedIndustry?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Remote' })
  preferredWork?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Git, Docker' })
  workTools?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Linux, Windows' })
  workEnvironments?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Agile, Scrum' })
  companyCulture?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'Email' })
  preferredCommunication?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '2 weeks' })
  joiningTime?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: '5000' })
  expectedMonthlySalary?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ example: 'https://example.com/resume.pdf' })
  resume?: string;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({ example: false })
  isDeleted: boolean;

  @Field(() => Number)
  @ApiProperty({ example: 1 })
  userId: number;
}
