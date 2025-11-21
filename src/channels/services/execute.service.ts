import { Injectable } from "@nestjs/common";
import { Channel } from "../channel.entity";
import { EmailDto } from "../dto/email.dto";
import { MessageDto } from "../dto/message.dto";
import { PushNotificationDto } from "../dto/push-notification.dto";
import { WebhookDto } from "../dto/webhook.dto";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class ExecuteService {
    constructor(private eventEmitter: EventEmitter2) { }
    async executePayload(payload: MessageDto | PushNotificationDto | EmailDto | WebhookDto | any) {
        // console.log('executePayload', payload);
        await this.execute(payload);
    }
    async executeChannel(channel: Channel) {
        // console.log('executeChannel', channel);
        await this.execute(channel.payload);
    }

    private async execute(payload: MessageDto | PushNotificationDto | EmailDto | WebhookDto | any) {
        switch (payload.type) {
            case 'email':
                await this.email(payload);
                break;
            case 'message':
                await this.sms(payload);
                break;
            case 'push-notification':
                await this.pushNotification(payload);
                break;
            case 'whatsapp':
                await this.whatsapp(payload);
                break;
            case 'webhook':
                await this.webhook(payload);
                break;
        }
    }

    private async email(payload: EmailDto) {
        console.log('email', payload);
    }

    private async sms(payload: MessageDto) {
        console.log('sms', payload);
    }

    private async whatsapp(payload: MessageDto) {
        console.log('whatsapp', payload);
    }

    private async pushNotification(payload: PushNotificationDto) {
        console.log('pushNotification', payload);
    }

    private async webhook(payload: WebhookDto) {
        try {
            // Send Webhook Request
            if (payload.method?.toUpperCase() === 'POST' || payload.method?.toUpperCase() === 'PUT' || payload.method?.toUpperCase() === 'DELETE' || payload.method?.toUpperCase() === 'PATCH') {
                const response = await fetch(payload.url, {
                    method: payload.method.toUpperCase() || 'POST',
                    headers: {
                        ...payload.headers && payload.headers,
                        ...payload.secret && { 'Authorization': `Bearer ${payload.secret}` }
                    },
                    body: JSON.stringify(payload.data),
                });
                const data = await response.json();

                // Testing purposes
                console.log(data);

                // Emit to Live Feed
                this.eventEmitter.emit('notify', JSON.stringify(data));
                return data;
            }

            if (payload.method?.toUpperCase() === 'GET') {
                const response = await fetch(payload.url);
                const data = await response.json();

                // Testing purposes
                console.log(data);

                // Emit to Live Feed
                this.eventEmitter.emit('notify', JSON.stringify(data));
                return data;
            }
        } catch (error) {
            console.log('Unable to execute webhook', error);
        }
    }
}