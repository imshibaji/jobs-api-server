import { forwardRef, Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsProvider } from './jobs.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JobsResolver } from './jobs.resolver';
import { UsersModule } from 'src/users/users.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { ApplicationsModule } from 'src/applications/applications.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsersModule),
    forwardRef(() => CompaniesModule),
    forwardRef(() => ApplicationsModule),
  ],
  controllers: [JobsController],
  providers: [...jobsProvider, JobsService, JobsResolver],
  exports: [JobsService],
})
export class JobsModule {}
