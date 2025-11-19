import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Public } from 'src/auth/auth.decorator';

@Public()
@Controller('skills')
export class SkillsController {
    constructor(private readonly skillService: SkillsService) { }

    @Get()
    async findAll() {
        return this.skillService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.skillService.findOne(id);
    }

    @Post()
    async create(@Body() skillDto: CreateSkillDto) {
        return this.skillService.create(skillDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() skillDto: UpdateSkillDto) {
        return this.skillService.update(id, skillDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.skillService.remove(id);
    }
}
