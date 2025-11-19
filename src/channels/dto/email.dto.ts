import { ApiProperty } from "@nestjs/swagger";

export class EmailDto {
    @ApiProperty({ type: String, required: true, description: 'email address' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'email subject' })
    subject: string;

    @ApiProperty({ type: String, required: true, description: 'email body' })
    text: string;
}