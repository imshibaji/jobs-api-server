import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillProviders } from './skills.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillsController],
  providers: [...skillProviders, SkillsService],
})
export class SkillsModule {}
