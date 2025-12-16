import { ApiProperty } from "@nestjs/swagger";

export class CreateOfferDto {
    @ApiProperty({ required: false })
    id?: number;
    @ApiProperty({ description: 'User ID or Recruiter ID', required: false, nullable: true, default: 1 })
    userId: number; // Maybe a recruiter ID

    @ApiProperty({ description: 'Job ID', required: false, nullable: true, default: 1})
    jobId: number;

    @ApiProperty({ description: 'Application ID', required: true, nullable: false , default: 1})
    applicationId: number;

    @ApiProperty({ description: 'Applicant ID', required: true, nullable: false , default: 1})
    applicantId: number;

    @ApiProperty({ description: 'Message', type: String, required: true, default: 'Offer letter' })
    message: string;

    @ApiProperty({ description: 'Date', type: String, required: true, default: '2022-01-01' })
    date: string;

    @ApiProperty({ description: 'Status', type: String, required: true, default: 'Pending' })
    status: string;

    @ApiProperty({ description: 'Type', type: String, required: true, default: 'Offer' })
    type: string;

    @ApiProperty({ description: 'Attachment', type: String, required: true, default: 'Offer letter pdf' })
    attachment: string;
}
