import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillProviders } from './skills.provider';
import { DatabaseModule } from 'src/database/database.module';
import { SkillsResolver } from './skills.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillsController],
  providers: [...skillProviders, SkillsService, SkillsResolver],
})
export class SkillsModule {}
