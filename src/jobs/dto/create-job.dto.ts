import { ApiProperty } from "@nestjs/swagger";

export class CreateJobDto {
    @ApiProperty({ example: 'Software Engineer', description: 'The title of the job' })
    title: string;

    @ApiProperty({ example: 'Develop and maintain software applications.', description: 'The description of the job' })
    description: string;

    @ApiProperty({ example: 'Bachelor\'s degree in Computer Science or related field.', description: 'The requirements for the job' })
    requirements: string;

    @ApiProperty({ example: 'Design, code, test, and deploy software solutions.', description: 'The responsibilities of the job' })
    responsibilities: string;

    @ApiProperty({ example: 'Health insurance, 401(k), paid time off.', description: 'The benefits of the job' })
    benefits: string;

    @ApiProperty({ example: 'Software Engineer', description: 'The skills required for the job', required: false })
    skills?: string;

    @ApiProperty({ example: 'New York, NY', description: 'The location of the job', required: false })
    location?: string;

    @ApiProperty({ example: '1 year', description: 'The experience required for the job', required: false })
    experience?: string;

    @ApiProperty({ example: 'USD', description: 'The currency of the salary', required: false })
    currency?: string;

    @ApiProperty({ example: 80000, description: 'The salary for the job', required: false })
    salary?: number;

    @ApiProperty({ example: 'Annual', description: 'The type of salary', required: false })
    salaryType?: string;

    @ApiProperty({ example: '$70,000 - $90,000', description: 'The salary range for the job', required: false })
    salaryRange?: string;

    @ApiProperty({ example: 'Full-time', description: 'The employment type of the job', required: false })
    employmentType?: string;

    @ApiProperty({ example: true, description: 'Indicates if the job is remote', required: false })
    isRemote?: boolean;

    @ApiProperty({ example: 'https://example.com/job', description: 'The link to the job', required: false })
    referenceLink?: string;

    @ApiProperty({ example: 'Full-time', description: 'The work arrangement of the job', required: false })
    workArrangement?: string;

    @ApiProperty({ example: 'Company provides hardware', description: 'The equipment policy of the job', required: false })
    equipmentPolicy?: string;

    @ApiProperty({ example: '2 weeks', description: 'The time to hire for the job', required: false })
    timeToHire?: string;

    @ApiProperty({ example: 'Company provides training', description: 'The training policy of the job', required: false })
    usingTools?: string[];

    @ApiProperty({ example: 'Flexible working hours', description: 'The working hours policy of the job', required: false })
    companyOfferings?: string[];

    @ApiProperty({ example: 'Yes (Mentor provided)', description: 'The Onboarding policy of the job', required: false })
    onboardSupport?: string;

    @ApiProperty({ example: 'Yes, we actively encourage it', description: 'The Career Restarters policy of the job', required: false })
    careerRestarters?: string;

    @ApiProperty({ example: 'Yes, we actively encourage it. Please reach out to us if you have any questions.', description: 'Notes about the job', required: false })
    notes?: string;

    @ApiProperty({ example: 1, description: 'The ID of the company posting the job' })
    companyId: number;

    @ApiProperty({ example: 1, description: 'The ID of the user posting the job' })
    userId: number;
}