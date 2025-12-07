import { Module } from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { ApplicantsController } from './applicants.controller';
import { applicantProviders } from './applicants.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ApplicantsController],
  providers: [...applicantProviders, ApplicantsService],
  exports: [ApplicantsService],
})
export class ApplicantsModule {}
