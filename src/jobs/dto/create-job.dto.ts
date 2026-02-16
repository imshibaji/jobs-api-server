import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class CreateJobDto {
    @Field(() => String)
    @ApiProperty({ example: 'Software Engineer', description: 'The title of the job' })
    title: string;

    @Field(() => String)
    @ApiProperty({ example: 'Develop and maintain software applications.', description: 'The description of the job' })
    description: string;

    @Field(() => String)
    @ApiProperty({ example: 'Bachelor\'s degree in Computer Science or related field.', description: 'The requirements for the job' })
    requirements: string;

    @Field(() => String)
    @ApiProperty({ example: 'Design, code, test, and deploy software solutions.', description: 'The responsibilities of the job' })
    responsibilities: string;

    @Field(() => String)
    @ApiProperty({ example: 'Health insurance, 401(k), paid time off.', description: 'The benefits of the job' })
    benefits: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'Software Engineer', description: 'The skills required for the job', required: false })
    skills?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'New York, NY', description: 'The location of the job', required: false })
    location?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: '1 year', description: 'The experience required for the job', required: false })
    experience?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'USD', description: 'The currency of the salary', required: false })
    currency?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 80000, description: 'The salary for the job', required: false })
    salary?: number;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'Annual', description: 'The type of salary', required: false })
    salaryType?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: '$70,000 - $90,000', description: 'The salary range for the job', required: false })
    salaryRange?: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'Full-time', description: 'The employment type of the job', required: false })
    employmentType?: string;

    @Field(() => Boolean, { nullable: true })
    @ApiProperty({ example: true, description: 'Indicates if the job is remote', required: false })
    isRemote?: boolean;

    @Field(() => String, { nullable: true })
    @ApiProperty({ example: 'https://example.com/job', description: 'The link to the job', required: false })
    referenceLink?: string;

    @Field(() => Number)
    @ApiProperty({ example: 1, description: 'The ID of the company posting the job' })
    companyId: number;

    @Field(() => Number)
    @ApiProperty({ example: 1, description: 'The ID of the user posting the job' })
    userId: number;
}