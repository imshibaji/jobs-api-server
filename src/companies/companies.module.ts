import { forwardRef, Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { companiesProvider } from './companies.provider';
import { DatabaseModule } from '../database/database.module';
import { CompaniesResolver } from './companies.resolver';
import { UsersModule } from '../users/users.module';
import { JobsModule } from '../jobs/jobs.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsersModule),
    forwardRef(() => JobsModule),
  ],
  controllers: [CompaniesController],
  providers: [...companiesProvider, CompaniesService, CompaniesResolver],
  exports: [CompaniesService],
})
export class CompaniesModule {}
