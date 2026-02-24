import { forwardRef, Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { offerProviders } from './offers.provider';
import { DatabaseModule } from '../database/database.module';
import { OffersResolver } from './offers.resolver';
import { ApplicantsModule } from '../applicants/applicants.module';
import { ApplicationsModule } from '../applications/applications.module';
import { UsersModule } from '../users/users.module';
import { JobsModule } from '../jobs/jobs.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicantsModule),
    forwardRef(() => ApplicationsModule),
    forwardRef(() => JobsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [OffersController],
  providers: [...offerProviders, OffersService, OffersResolver],
  exports: [OffersService],
})
export class OffersModule {}
