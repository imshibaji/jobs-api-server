import { forwardRef, Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { applicantProviders } from './applicants.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ApplicantsResolver } from './applicants.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => UsersModule)],
  controllers: [ApplicantsController],
  providers: [...applicantProviders, ApplicantsService, ApplicantsResolver],
  exports: [ApplicantsService],
})
export class ApplicantsModule {}
