import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MessageDto } from "./dto/message.dto";
import { PushNotificationDto } from "./dto/push-notification.dto";
import { EmailDto } from "./dto/email.dto";
import { WebhookDto } from "./dto/webhook.dto";

@Entity('channels')
export class Channel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'json' })
    payload: MessageDto | PushNotificationDto | EmailDto | WebhookDto | any;

    @Column()
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}