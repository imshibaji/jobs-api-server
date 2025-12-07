import { Body, Controller, Post, Sse } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { EmailDto } from './dto/email.dto';
import { MessageDto } from './dto/message.dto';
import { PushNotificationDto } from './dto/push-notification.dto';
import { WebhookDto } from './dto/webhook.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from 'src/auth/auth.decorator';

@ApiBearerAuth()
@Controller('channels')
export class ChannelsController {
    constructor(private readonly channelsService: ChannelsService) {}

    @Public()
    @Sse('notify')
    events() {
        return this.channelsService.notify();
    }

    @Post('sms')
    async sendSms(@Body() body: MessageDto) {
        return await this.channelsService.sendSms(body);
    }

    @Post('whatsapp')
    async sendWhatsApp(@Body() body: MessageDto) {
        return await this.channelsService.sendWhatsApp(body);
    }

    @Post('email')
    async sendEmail(@Body() body: EmailDto) {
        return await this.channelsService.sendEmail(body);
    }

    @Post('push-notification')
    async sendPushNotification(@Body() body: PushNotificationDto) {
        return await this.channelsService.sendPushNotification(body);
    }


    @Post('webhook')
    async sendWebhook(@Body() body: WebhookDto) {
        return await this.channelsService.sendWebhook(body);
    }
}
