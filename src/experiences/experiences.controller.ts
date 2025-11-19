import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ExperiencesService } from './experiences.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Public } from 'src/auth/auth.decorator';

@Public()
@Controller('experiences')
export class ExperiencesController {
    constructor(private readonly experiencesService: ExperiencesService) {}

    @Get()
    async findAll() {
        return this.experiencesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.experiencesService.findOne(id);
    }

    @Post()
    async create(@Body() createExperienceDto: CreateExperienceDto) {
        return this.experiencesService.create(createExperienceDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto) {
        return this.experiencesService.update(id, updateExperienceDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.experiencesService.delete(id);
    }
}
