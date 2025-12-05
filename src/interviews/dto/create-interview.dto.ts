import { ApiProperty } from "@nestjs/swagger";


export class CreateInterviewDto {
    @ApiProperty({ type: Date, required: true, description: 'interview date', example: '2022-01-01' })  
    date: Date;

    @ApiProperty({ type: String, required: true, description: 'interview time', example: '10:00' })
    time: string;

    @ApiProperty({ type: String, required: true, description: 'interview location', example: 'New York' })
    location: string;

    @ApiProperty({ type: String, required: false, description: 'interview notes', example: 'Interview notes' })
    notes?: string;

    @ApiProperty({ type: String, required: false, description: 'interview feedback', example: 'Interview feedback' })
    feedback?: string;

    @ApiProperty({ type: Number, required: true, description: 'application id', example: 1 })
    applicationId: number;

    @ApiProperty({ type: String, required: false, description: 'interview status', example: 'Scheduled' })
    status?: string;
}
