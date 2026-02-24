import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './users.providers';
import { UsersResolver } from './users.resolver';
import { ApplicantsModule } from '../applicants/applicants.module';
import { JobsModule } from '../jobs/jobs.module';
import { CompaniesModule } from '../companies/companies.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicantsModule),
    forwardRef(() => JobsModule),
    forwardRef(() => CompaniesModule),
  ],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
