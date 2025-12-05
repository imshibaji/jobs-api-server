import { ApiProperty } from "@nestjs/swagger";

export class CreateOfferDto {
    @ApiProperty({ required: false })
    id?: number;
    @ApiProperty({ required: false, nullable: true, default: 1 })
    userId: number; // Maybe a recruiter ID
    @ApiProperty({ required: false, nullable: true, default: 1})
    jobId: number;
    @ApiProperty({ required: true, nullable: false , default: 1})
    applicationId: number;

    @ApiProperty({ type: String, required: true, default: 'Offer letter' })
    letter: string;

    @ApiProperty({ type: String, required: true, default: '2022-01-01' })
    date: string;

    @ApiProperty({ type: String, required: true, default: 'Pending' })
    status: string;

    @ApiProperty({ type: String, required: true, default: 'Offer' })
    type: string;

    @ApiProperty({ type: String, required: true, default: 'Offer letter' })
    attachment: string;
}
