import { ApiProperty } from "@nestjs/swagger";

export class MessageDto {
    @ApiProperty({ type: String, required: true, description: 'phone number', example: '1234567890' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'message', example: 'Welcome to Jobs Portal'})
    message: string;

    @ApiProperty({ type: String, required: false, description: 'message sender name', example: 'Jobs Portal' })
    name?: string;

    @ApiProperty({ type: String, required: false, description: 'message sender name', example: 'reply@example.com' })
    from?: string;

    @ApiProperty({ type: String, required: false, description: 'message attachment', example: 'https://example.com/attachment.pdf' })
    attachment?: string;

    @ApiProperty({ type: Date, required: false, description: 'message date time', example: '12-12-2025 12:00:00' })
    dateTime?: string;

    @ApiProperty({ type: String, required: false, description: 'message type', example: 'message' })
    type?: string;
}