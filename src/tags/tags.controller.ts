import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Get()
    async findAll() {
        return await this.tagsService.findAll();
    }

    @Get(':id')
    async findOne(id: number) {
        return await this.tagsService.findOne(id);
    }

    @Post()
    async create(tag: CreateTagDto) {
        return await this.tagsService.create(tag);
    }

    @Put(':id')
    async update(id: number, tag: UpdateTagDto) {
        return await this.tagsService.update(id, tag);
    }

    @Delete(':id')
    async delete(id: number) {
        return await this.tagsService.delete(id);
    }
}
