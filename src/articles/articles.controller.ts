import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}

    @Get()
    findAll() {
        return this.articlesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.articlesService.findOne(+id);
    }

    @Post()
    create(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.create(createArticleDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: CreateArticleDto) {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Post(':id/publish')
    publish(@Param('id') id: string) {
        return this.articlesService.publish(+id);
    }

    @Put(':id/archive')
    archive(@Param('id') id: string) {
        return this.articlesService.archive(+id);
    }

    @Put(':id/unarchive')
    unarchive(@Param('id') id: string) {
        return this.articlesService.unarchive(+id);
    }

    @Put(':id/delete')
    delete(@Param('id') id: string) {
        return this.articlesService.delete(+id);
    }

    @Put(':id/restore')
    restore(@Param('id') id: string) {
        return this.articlesService.restore(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.articlesService.remove(+id);
    }
}
