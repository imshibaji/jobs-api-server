import { forwardRef, Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { articlesProvider } from './articles.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ArticlesResolver } from './articles.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => UsersModule),
  ],
  controllers: [ArticlesController],
  providers: [...articlesProvider, ArticlesService, ArticlesResolver],
  exports: [ArticlesService],
})
export class ArticlesModule {}
