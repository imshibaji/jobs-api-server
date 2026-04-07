import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { deleteFile, fileExists, UseAppFileInterceptor } from 'src/utils/app-file.interceptor';
import { UpdateCompanyDto } from './dto/update-company.dto';

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
  @ApiConsumes('multipart/form-data')
  @UseAppFileInterceptor('image', './uploads/pictures')
  async create(@Body() createCompanyDto: CreateCompanyDto, @UploadedFile() file: Express.Multer.File) {
    createCompanyDto.image = typeof file === 'string' ? file : file.filename;
    return await this.companiesService.create(createCompanyDto);
  }

  @Put(':id')
  @ApiConsumes('multipart/form-data')
  @UseAppFileInterceptor('image', './uploads/pictures')
  async update(@Param('id') id: number, @Body() updateCompanyDto: UpdateCompanyDto, @UploadedFile() file: Express.Multer.File) {
    const prevCompany = await this.companiesService.findOne(id);
    const checkImage = prevCompany?.image && await fileExists('./uploads/pictures/'+prevCompany!.image);
    if (checkImage) {
      deleteFile('./uploads/pictures/'+prevCompany.image);
    }
    updateCompanyDto.image = typeof file === 'string' ? file : file.filename;
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
    const company = await this.companiesService.findOne(id);
    const checkImage = company?.image && await fileExists('./uploads/pictures/'+company!.image);
    if (checkImage) {
      deleteFile('./uploads/pictures/'+company.image);
    }
    return await this.companiesService.delete(id);
  }
}
