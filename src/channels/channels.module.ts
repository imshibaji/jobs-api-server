import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { EmailService } from './services/email.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bull';
import { channelsProvider } from './channels.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ScheduleProcessor } from './services/schedule.processor';
import { ExecuteService } from './services/execute.service';

@Module({
  imports: [
    DatabaseModule,
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    // 1. Connect to Redis
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: Number(process.env.REDIS_PORT) || 6379,
        username: process.env.REDIS_USER || 'default',
        password: process.env.REDIS_PASS ||'password',
        db: Number(process.env.REDIS_DB) || 0,
      },
    }),
    // 2. Register the specific Queue
    BullModule.registerQueue({
      name: 'scheduler',
    }),
  ],
  controllers: [ChannelsController],
  providers: [
    ...channelsProvider, 
    ChannelsService,
    EmailService, 
    ScheduleProcessor,
    ExecuteService
  ]
})
export class ChannelsModule {}
