import { ApiProperty } from "@nestjs/swagger";

export class PushNotificationDto {
    @ApiProperty({ type: String, required: true, description: 'phone number to send push notification' })
    readonly to: string;

    @ApiProperty({ type: String, required: true, description: 'push notification title' })
    readonly title: string;

    @ApiProperty({ type: String, required: true, description: 'push notification body' })
    readonly body: string;
}