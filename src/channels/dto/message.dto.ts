import { ApiProperty } from "@nestjs/swagger";

export class MessageDto {
    @ApiProperty({ type: String, required: true, description: 'phone number' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'message' })
    message: string;
}