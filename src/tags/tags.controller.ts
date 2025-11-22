import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get()
    async findAll() {
        return await this.tagsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.tagsService.findOne(id);
    }

    @Post()
    async create(@Body() tag: CreateTagDto) {
        return await this.tagsService.create(tag);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() tag: UpdateTagDto) {
        return await this.tagsService.update(id, tag);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.tagsService.delete(id);
    }
}
