import { forwardRef, Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skillProviders } from './skills.provider';
import { DatabaseModule } from 'src/database/database.module';
import { SkillsResolver } from './skills.resolver';
import { ApplicantsModule } from 'src/applicants/applicants.module';
import { ApplicationsModule } from 'src/applications/applications.module';
import { UsersModule } from 'src/users/users.module';
import { JobsModule } from 'src/jobs/jobs.module';

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
  exports: [SkillsService]
})
export class SkillsModule {}
