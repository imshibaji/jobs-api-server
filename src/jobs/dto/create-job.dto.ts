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

    @ApiProperty({ example: 'New York, NY', description: 'The location of the job', required: false })
    location?: string;

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

    @ApiProperty({ example: 1, description: 'The ID of the company posting the job' })
    companyId: number;

    @ApiProperty({ example: 1, description: 'The ID of the user posting the job' })
    userId: number;
}