import { Process, Processor } from '@nestjs/bull';
import { type Job } from 'bull';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Inject } from '@nestjs/common';
import { Channel } from '../channel.entity';

@Processor('scheduler')
export class ScheduleProcessor {
  constructor(
    @Inject('CHANNEL_REPOSITORY')
    private messageRepo: Repository<Channel>,
    private eventEmitter: EventEmitter2,
  ) {}

  @Process('publish-message')
    async handleScheduledMessage(job: Job<{ messageId: string, channel: string }>) {
        console.log(`Processing scheduled message: ${job.data.messageId}`);

        // 1. Find the message in DB
        // Note: TypeORM Mongo IDs act weird, ensure you convert if needed
        const message = await this.messageRepo.findOneBy({ 
            id: +job.data.messageId
        });

        // 1. Find the message type in DB
        console.log(message?.payload?.type!);
        

        if (message) {
            // 2. Update Status
            message.status = 'SENT';
            await this.messageRepo.save(message);

            // 2. Update Status
            console.log(message);
            

            // 3. Emit to Live Feed (SSE)
            this.eventEmitter.emit('notify', message);
        }else {
            console.error(`Message with ID ${job.data.messageId} not found.`);
        }
    }
}