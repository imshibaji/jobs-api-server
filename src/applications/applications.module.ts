import { forwardRef, Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { DatabaseModule } from '../database/database.module';
import { applicationProviders } from './applications.provider';
import { ApplicationsResolver } from './applications.resolver';
import { UsersModule } from '../users/users.module';
import { ApplicantsModule } from '../applicants/applicants.module';
import { JobsModule } from '../jobs/jobs.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicantsModule),
    forwardRef(() => JobsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [ApplicationsController],
  providers: [
    ...applicationProviders,
    ApplicationsService,
    ApplicationsResolver,
  ],
  exports: [ApplicationsService],
})
export class ApplicationsModule {}
