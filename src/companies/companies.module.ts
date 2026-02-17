import { forwardRef, Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { companiesProvider } from './companies.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CompaniesResolver } from './companies.resolver';
import { UsersModule } from 'src/users/users.module';
import { JobsModule } from 'src/jobs/jobs.module';

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
