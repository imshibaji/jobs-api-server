import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { feedbacksProvider } from './feedbacks.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbacksController],
  providers: [...feedbacksProvider, FeedbacksService],
})
export class FeedbacksModule {}
