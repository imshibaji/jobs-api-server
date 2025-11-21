import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { ApplicantsModule } from 'src/applicants/applicants.module';
import { SkillsModule } from 'src/skills/skills.module';
import { ExperiencesModule } from 'src/experiences/experiences.module';
import { EducationModule } from 'src/education/education.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { JobsModule } from 'src/jobs/jobs.module';
import { ApplicationsModule } from 'src/applications/applications.module';
import { ArticlesModule } from 'src/articles/articles.module';
import { TagsModule } from 'src/tags/tags.module';
import { ChannelsModule } from 'src/channels/channels.module';
import { UploadController } from './upload.controller';
import configuration from 'src/config/configuration';
import { FileController } from './file.controller';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    RouterModule.register([]),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ApplicantsModule,
    SkillsModule,
    ExperiencesModule,
    EducationModule,
    CompaniesModule,
    JobsModule,
    ApplicationsModule,
    ArticlesModule,
    TagsModule,
    ChannelsModule
  ],
  controllers: [AppController, UploadController, FileController],
  providers: [AppService],
})
export class AppModule {}
