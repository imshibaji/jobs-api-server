import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsProvider } from './jobs.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JobsResolver } from './jobs.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [JobsController],
  providers: [...jobsProvider, JobsService, JobsResolver]
})
export class JobsModule {}
