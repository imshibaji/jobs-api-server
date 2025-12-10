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
import configuration from 'src/config/configuration';

@Module({
  imports: [
    DatabaseModule,
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    // 1. Connect to Redis
    BullModule.forRoot({
      redis: {
        host: configuration().redis.host,
        port: configuration().redis.port,
        username: configuration().redis.user,
        password: configuration().redis.pass,
        db: configuration().redis.db,
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
  ],
  exports: [ChannelsService]
})
export class ChannelsModule {}
