import { Body, Controller, Post } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { EmailDto } from './dto/email.dto';
import { MessageDto } from './dto/message.dto';
import { PushNotificationDto } from './dto/push-notification.dto';
import { Public } from 'src/auth/auth.decorator';

@Public()
@Controller('channels')
export class ChannelsController {
    constructor(private readonly channelsService: ChannelsService) {}

    @Post('email')
    async sendEmail(@Body() body: EmailDto) {
        return await this.channelsService.sendEmail(body.to, body.subject, body.text);
    }

    @Post('sms')
    async sendSms(@Body() body: MessageDto) {
        return await this.channelsService.sendSms(body.to, body.message);
    }

    @Post('push-notification')
    async sendPushNotification(@Body() body: PushNotificationDto) {
        return await this.channelsService.sendPushNotification(body.to, body.title, body.body);
    }

    @Post('whatsapp')
    async sendWhatsApp(@Body() body: MessageDto) {
        return await this.channelsService.sendWhatsApp(body.to, body.message);
    }

    @Post('telegram')
    async sendTelegram(@Body() body: MessageDto) {
        return await this.channelsService.sendTelegram(body.to, body.message);
    }

    @Post('slack')
    async sendSlack(@Body() body: MessageDto) {
        return await this.channelsService.sendSlack(body.to, body.message);
    }

    @Post('webhook')
    async sendWebhook(@Body() body: MessageDto) {
        return await this.channelsService.sendWebhook(body.to, body.message);
    }

}
