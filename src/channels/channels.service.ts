import { Injectable } from '@nestjs/common';

@Injectable()
export class ChannelsService {
    async sendEmail(to: string, subject: string, message: string) {}

    async sendSms(to: string, text: string) {}

    async sendPushNotification(to: string, title: string, body: string) {}

    async sendWhatsApp(to: string, text: string) {}

    async sendTelegram(to: string, text: string) {}

    async sendSlack(to: string, text: string) {}

    async sendWebhook(to: string, text: string) {}
}
