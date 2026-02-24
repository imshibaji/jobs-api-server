import { forwardRef, Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillProviders } from './skills.provider';
import { DatabaseModule } from '../database/database.module';
import { SkillsResolver } from './skills.resolver';
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
  controllers: [SkillsController],
  providers: [...skillProviders, SkillsService, SkillsResolver],
  exports: [SkillsService],
})
export class SkillsModule {}
