import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { educationsProvider } from './educations.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EducationController],
  providers: [...educationsProvider, EducationService]
})
export class EducationModule {}
