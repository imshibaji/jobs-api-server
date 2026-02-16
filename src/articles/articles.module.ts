import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { articlesProvider } from './articles.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ArticlesResolver } from './articles.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticlesController],
  providers: [...articlesProvider, ArticlesService, ArticlesResolver]
})
export class ArticlesModule {}
