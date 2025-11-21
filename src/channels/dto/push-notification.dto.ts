import { ApiProperty } from "@nestjs/swagger";
import { Base } from "./base.dto";

export class PushNotificationDto extends Base {
    @ApiProperty({ type: String, required: true, description: 'phone number to send push notification', example: '1234567890' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'push notification title', example: 'Welcome to Jobs Portal'})
    title: string;

    @ApiProperty({ type: String, required: false, description: 'push notification subtitle', example: 'default' })
    subtitle?: string;

    @ApiProperty({ type: String, required: true, description: 'push notification body', example: 'Welcome to Jobs Portal'})
    body: string;

    @ApiProperty({ type: String, required: false, description: 'push notification sender name', example: 'Jobs Portal' })
    name?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification sender name', example: 'reply@example.com' })
    from?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification attachment', example: 'https://example.com/attachment.pdf' })
    attachment?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification badge', example: '1' })
    badge?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification sound', example: 'default' })
    sound?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification thread identifier', example: 'default' })
    threadId?: string;

    @ApiProperty({ type: String, required: false, description: 'push notification type', example: 'push-notification' })
    type: string = 'push-notification';
}