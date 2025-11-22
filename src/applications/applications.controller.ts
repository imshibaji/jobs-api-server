import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @Get()
    async findAll() {
        return this.applicationsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.applicationsService.findOne(id);
    }

    @Post()
    async create(@Body() applicationData: CreateApplicationDto) {
        return await this.applicationsService.create(applicationData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() applicationData: UpdateApplicationDto) {
        return this.applicationsService.update(id, applicationData);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.applicationsService.remove(id);
    }
}
