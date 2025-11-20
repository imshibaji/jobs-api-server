import { ApiProperty } from "@nestjs/swagger";

export class EmailDto {
    @ApiProperty({ type: String, required: true, description: 'email address', example: '3oFbV@example.com' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'email address', example: '3oFbV@example.com' })
    cc?: string;

    @ApiProperty({ type: String, required: true, description: 'email address', example: '3oFbV@example.com' })
    bcc?: string;

    @ApiProperty({ type: String, required: true, description: 'email subject', example: 'Welcome to Jobs Portal'})
    subject: string;

    @ApiProperty({ type: String, required: true, description: 'email body', example: 'Welcome to Jobs Portal'})
    text: string;

    @ApiProperty({ type: String, required: false, description: 'email sender name', example: 'admin?@example.com' })
    from?: string;

    @ApiProperty({ type: String, required: false, description: 'email sender name', example: 'Jobs Portal' })
    name?: string;

    @ApiProperty({ type: String, required: false, description: 'email reply to', example: 'reply@example.com' })
    replyTo?: string;

    @ApiProperty({ type: String, required: false, description: 'email reply to name', example: 'Jobs Portal' })
    replyToName?: string;

    @ApiProperty({ type: String, required: false, description: 'email attachment', example: 'https://example.com/attachment.pdf' })
    attachment?: string;

    @ApiProperty({ type: Date, required: false, description: 'email date time', example: '12-12-2025 12:00:00' })
    dateTime?: string;

    @ApiProperty({ type: String, required: false, description: 'email template', example: 'default' })
    template?: string;

    @ApiProperty({ type: String, required: false, description: 'email template language', example: 'default' })
    language?: string;

    @ApiProperty({ type: String, required: false, description: 'email template type', example: 'email' })
    type?: string;
}