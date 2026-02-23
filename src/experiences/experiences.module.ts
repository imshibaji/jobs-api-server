import { forwardRef, Module } from '@nestjs/common';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';
import { experiencesProvider } from './experiences.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ExperiencesResolver } from './experiences.resolver';
import { ApplicantsModule } from 'src/applicants/applicants.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => ApplicantsModule)],
  controllers: [ExperiencesController],
  providers: [...experiencesProvider, ExperiencesService, ExperiencesResolver],
  exports: [ExperiencesService],
})
export class ExperiencesModule {}
