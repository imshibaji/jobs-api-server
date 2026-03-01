import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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

  @Get('/search/:prop/:value')
  async searchBy(@Param('prop') prop: string,@Param('value') value: string) {
    return await this.companiesService.searchBy(prop, value);
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
