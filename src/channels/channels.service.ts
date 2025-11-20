import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, map } from 'rxjs';
import { EmailDto } from './dto/email.dto';
import { MessageDto } from './dto/message.dto';
import { PushNotificationDto } from './dto/push-notification.dto';
import { Repository } from 'typeorm';
import { type Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { Channel } from './channel.entity';
import * as moment from 'moment-timezone';


@Injectable()
export class ChannelsService {

    constructor(
        private eventEmitter: EventEmitter2,
        @Inject('CHANNEL_REPOSITORY')
        private messageRepo: Repository<Channel>,
        @InjectQueue('scheduler') private queue: Queue,
    ) {}

    notify() {
        return fromEvent(this.eventEmitter, 'notify').pipe(
            map((data) => {
                console.log(data);
                return data;
            }),
        );
    }

    async sendEmail(email: EmailDto) {
        this.eventEmitter.emit('notify', email);
        return email;
    }

    async sendSms(message: MessageDto) {
        this.eventEmitter.emit('notify', message);
        return message;
    }

    async sendPushNotification(message: PushNotificationDto) {
        this.eventEmitter.emit('notify', message);
        return message;
    }

    async sendWhatsApp(message: MessageDto) {
        this.eventEmitter.emit('notify', message);
        return message;
    }

    async sendWebhook(message: PushNotificationDto) {
        this.eventEmitter.emit('notify', message);
        return message;
    }

    async scheduleMessage(payload: MessageDto | PushNotificationDto | EmailDto) {

        // 1. Parse the date strictly in the User's Timezone
        // moment.tz(date, timezone) creates a moment object set to that specific zone
        const targetTime = moment.tz(payload.dateTime!, 'DD-MM-YYYY HH:mm:ss', 'Asia/Kolkata');

        // 2. Get "Now" (Moment defaults to local server time, but diff works regardless)
        const now = moment.tz('Asia/Kolkata');

        // 3. Calculate Delay in Milliseconds
        // .diff(comparison, unit)
        const delay = targetTime.diff(now);
        

        // 3. Add to Queue with DELAY option
        if(delay > 0) {
            // 1. Save to Postgres as 'PENDING' (Update your Entity to have a status column)
            const newMessage = this.messageRepo.create({
                payload: payload,
                status: 'PENDING',
            });
            const savedMessage = await this.messageRepo.save(newMessage);

            // 2. Add to Queue
            await this.queue.add(
                'publish-message', // Job Name
                { messageId: savedMessage.id }, // Payload (keep it small, just the ID)
                { delay: delay, removeOnComplete: true } // <--- THE MAGIC PART
            );
        }

        const message = { status: 'scheduled', timeNow: now.toLocaleString(), scheduledFor: targetTime.toLocaleString(), delay: delay };
        this.eventEmitter.emit('notify', message);
        return message;
    }

    
}
