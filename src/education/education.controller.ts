import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Controller('education')
export class EducationController {
    constructor(private readonly educationService: EducationService) {}

    @Get()
    async findAll() {
        return this.educationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.educationService.findOne(id);
    }

    @Post()
    async create(@Body() createEducationDto: CreateEducationDto) {
        return this.educationService.create(createEducationDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateEducationDto: UpdateEducationDto) {
        return this.educationService.update(id, updateEducationDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.educationService.remove(id);
    }
}
