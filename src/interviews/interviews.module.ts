import { forwardRef, Module } from '@nestjs/common';
import { InterviewsService } from './interviews.service';
import { InterviewsController } from './interviews.controller';
import { interviewProviders } from './interview.provider';
import { DatabaseModule } from '../database/database.module';
import { InterviewsResolver } from './interviews.resolver';
import { UsersModule } from '../users/users.module';
import { ApplicationsModule } from '../applications/applications.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicationsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [InterviewsController],
  providers: [...interviewProviders, InterviewsService, InterviewsResolver],
  exports: [InterviewsService],
})
export class InterviewsModule {}
