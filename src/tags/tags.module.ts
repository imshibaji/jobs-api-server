import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { tagsProvider } from './tags.provider';
import { DatabaseModule } from 'src/database/database.module';
import { TagsResolver } from './tags.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [TagsController],
  providers: [...tagsProvider, TagsService, TagsResolver]
})
export class TagsModule {}
