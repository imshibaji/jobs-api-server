import { ApiProperty } from "@nestjs/swagger";

export class CreateJoiningDto {
    @ApiProperty({ type: Number, required: true,  default: 1 })
    jobId: number;

    @ApiProperty({ type: Number, required: true,  default: 1 })
    userId: number;

    @ApiProperty({ type: Number, required: true,  default: 1 })
    applicantId: number;

    @ApiProperty({ type: Number, required: true,  default: 1 })
    applicationId: number;

    @ApiProperty({ type: String, required: true,  default: 'Cover Letter' })
    letter: string;

    @ApiProperty({ type: String, required: true,  default: '2022-01-01' })
    date: string;

    @ApiProperty({ type: String, required: true,  default: '10:00' })
    time: string;

    @ApiProperty({ type: String, required: true,  default: 'Pending' })
    status: string;
}