import { Body, Controller, Post, Sse } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { EmailDto } from './dto/email.dto';
import { MessageDto } from './dto/message.dto';
import { PushNotificationDto } from './dto/push-notification.dto';
import { Public } from 'src/auth/auth.decorator';

@Public()
@Controller('channels')
export class ChannelsController {
    constructor(private readonly channelsService: ChannelsService) {}

    @Sse('notify')
    events() {
        return this.channelsService.notify();
    }

    @Post('email')
    async sendEmail(@Body() body: EmailDto) {
        return await this.channelsService.sendEmail(body);
    }

    @Post('sms')
    async sendSms(@Body() body: MessageDto) {
        return await this.channelsService.sendSms(body);
    }

    @Post('push-notification')
    async sendPushNotification(@Body() body: PushNotificationDto) {
        return await this.channelsService.sendPushNotification(body);
    }

    @Post('whatsapp')
    async sendWhatsApp(@Body() body: MessageDto) {
        return await this.channelsService.sendWhatsApp(body);
    }


    @Post('webhook')
    async sendWebhook(@Body() body: PushNotificationDto) {
        return await this.channelsService.sendWebhook(body);
    }

    @Post('schedule-sms')
    async scheduleSMS(@Body() body: MessageDto) {
        return await this.channelsService.scheduleMessage(body);
    }

    @Post('schedule-email')
    async scheduleEmail(@Body() body: EmailDto) {
        return await this.channelsService.scheduleMessage(body);
    }

    @Post('schedule-push-notification')
    async schedulePushNotification(@Body() body: PushNotificationDto) {
        return await this.channelsService.scheduleMessage(body);
    }

}
