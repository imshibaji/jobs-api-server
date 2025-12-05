import { Module } from '@nestjs/common';
import { InterviewsService } from './interviews.service';
import { InterviewsController } from './interviews.controller';
import { interviewProviders } from './interview.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterviewsController],
  providers: [...interviewProviders, InterviewsService],
})
export class InterviewsModule {}
