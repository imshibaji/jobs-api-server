import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    async findAll() {
        return await this.companiesService.findAll();
    }

    @Get('search')
    @ApiQuery({ name: 'value', required: true, type: String})
    @ApiQuery({ name: 'key', required: true, type: String, enum: ['name', 'email', 'phoneNumber', 'recruiterName', 'website']})
    async seachBy(@Query('key') key: string, @Query('value') value: string) {
        return await this.companiesService.searchBy(key, value);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return await this.companiesService.findOne(id);
    }

    @Post()
    async create(@Body() createCompanyDto: CreateCompanyDto) {
        return await this.companiesService.create(createCompanyDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateCompanyDto: any) {
        return await this.companiesService.update(id, updateCompanyDto);
    }

    @Put(':id/soft-delete')
    async softDelete(@Param('id') id: number) {
        return await this.companiesService.softDelete(id);
    }

    @Put(':id/restore')
    async restore(@Param('id') id: number) {
        return await this.companiesService.restore(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.companiesService.delete(id);
    }
}
