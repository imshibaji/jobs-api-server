import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    findAll() {
        return this.companiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.companiesService.findOne(id);
    }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companiesService.create(createCompanyDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCompanyDto: any) {
        return this.companiesService.update(id, updateCompanyDto);
    }

    @Put(':id/soft-delete')
    softDelete(@Param('id') id: number) {
        return this.companiesService.softDelete(id);
    }

    @Put(':id/restore')
    restore(@Param('id') id: number) {
        return this.companiesService.restore(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.companiesService.delete(id);
    }
}
