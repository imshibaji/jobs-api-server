import { forwardRef, Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { educationsProvider } from './educations.provider';
import { DatabaseModule } from '../database/database.module';
import { EducationResolver } from './education.resolver';
import { ApplicantsModule } from '../applicants/applicants.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => ApplicantsModule)],
  controllers: [EducationController],
  providers: [...educationsProvider, EducationService, EducationResolver],
  exports: [EducationService],
})
export class EducationModule {}
