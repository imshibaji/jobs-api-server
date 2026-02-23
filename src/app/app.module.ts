import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { PortfoliosModule } from 'src/portfolios/portfolios.module';
import { OffersModule } from 'src/offers/offers.module';
import { InterviewsModule } from 'src/interviews/interviews.module';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { GraphQLUpload } from 'graphql-upload-ts';
import { UploadResolver } from './upload.resolver';
import { FileResolver } from './file.resolver';

@Module({
  imports: [
    RouterModule.register([]),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'public'),
      serveRoot: '/static', // 👈 This moves the static files to http://localhost:3000/static
      exclude: ['/graphql'], // Ensure it doesn't interfere with GraphQL
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ApplicantsModule,
    SkillsModule,
    ExperiencesModule,
    EducationModule,
    PortfoliosModule,
    CompaniesModule,
    JobsModule,
    ApplicationsModule,
    InterviewsModule,
    OffersModule,
    ArticlesModule,
    TagsModule,
    ChannelsModule,
    FeedbacksModule,
    LoggerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: { Upload: GraphQLUpload },
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      autoSchemaFile: '/tmp/schema.gql',
      path: '/graphql',
      sortSchema: true,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      playground: false, // Disable the default GraphQL Playground
      debug: true,
      graphiql: true,
    }),
  ],
  controllers: [AppController, UploadController, FileController],
  providers: [
    AppService,
    { provide: 'APP_INTERCEPTOR', useClass: LoggerInterceptor },
    AppResolver,
    UploadResolver,
    FileResolver,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
