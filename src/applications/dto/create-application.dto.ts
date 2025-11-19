import { ApiProperty } from "@nestjs/swagger";

export class CreateApplicationDto {
    @ApiProperty({ description: 'ID of the job being applied for', example: 1 })
    jobId: number;

    @ApiProperty({ description: 'ID of the applicant', example: 42 })
    applicantId: number;

    @ApiProperty({ description: 'Cover letter of the application', example: 'I am very interested in this position because...' })
    coverLetter: string;

    @ApiProperty({ description: 'Additional details provided by the applicant', example: 'I have 5 years of experience in...' , required: false})
    details?: string;

    @ApiProperty({ description: 'Resume of the applicant', example: 'Base64EncodedString...', required: false })
    resume?: string;

    @ApiProperty({ description: 'Current status of the application', example: 'Under Review' })
    status: string;

    @ApiProperty({ description: 'Scheduled date for the interview', example: '2024-07-15', required: false })
    interviewDate?: Date;

    @ApiProperty({ description: 'Scheduled time for the interview', example: '14:30:00', required: false })
    interviewTime?: string;

    @ApiProperty({ description: 'Location for the interview', example: '123 Main St, City, Country', required: false })
    interviewLocation?: string;

    @ApiProperty({ description: 'Feedback provided after the interview', example: 'The interview went well...', required: false })
    feedback?: string;

    @ApiProperty({ description: 'Offer letter provided to the applicant', example: 'Base64EncodedString...', required: false })
    offerLetter?: string;

    @ApiProperty({ description: 'Date when the offer was made', example: '2024-07-20', required: false })
    offerDate?: Date;

    @ApiProperty({ description: 'Date when the applicant is expected to join', example: '2024-08-01', required: false })
    joiningDate?: Date;
}