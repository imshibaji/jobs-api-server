import { Module } from '@nestjs/common';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';
import { experiencesProvider } from './experiences.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExperiencesController],
  providers: [...experiencesProvider, ExperiencesService]
})
export class ExperiencesModule {}
