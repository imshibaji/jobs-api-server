import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {}

    @Get()
    async findAll(): Promise<Job[]> {
        return this.jobsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Job | null> {
        return this.jobsService.findOne(id);
    }

    @Post()
    async create(@Body() jobData: CreateJobDto): Promise<Job> {
        return this.jobsService.create(jobData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() jobData: CreateJobDto): Promise<Job | null> {
        return this.jobsService.update(id, jobData);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.jobsService.remove(id);
    }

}
