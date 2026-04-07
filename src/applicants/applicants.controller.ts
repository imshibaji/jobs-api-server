import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { deleteFile, fileExists, UseAppFileInterceptor } from 'src/utils/app-file.interceptor';

@ApiBearerAuth()
@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) {}

  @Get()
  async findAll() {
    return await this.applicantsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.applicantsService.findOne(+id);
  }

  @Get('search/:prop/:value')
  async search(@Param('prop') prop: string, @Param('value') value: string) {
    return await this.applicantsService.searchBy(prop, value);
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  // @UseInterceptors(AppFileInterceptor('resume', './uploads/resumes'))
  @UseAppFileInterceptor('resume', './uploads/resumes')
  async create(@Body() createApplicantDto: CreateApplicantDto, @UploadedFile() file: Express.Multer.File) {
    createApplicantDto.resume = typeof file === 'string' ? file : file.filename;
    return await this.applicantsService.create(createApplicantDto);
  }

  @Put(':id')
  @ApiConsumes('multipart/form-data')
  @UseAppFileInterceptor('resume', './uploads/resumes')
  async update(
    @Param('id') id: string,
    @Body() updateApplicantDto: UpdateApplicantDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    // console.log(updateApplicantDto);
    // console.log(file);
    const prevApplicant = await this.applicantsService.findOne(+id);
    const checkFile = prevApplicant?.resume &&  await fileExists('./uploads/resumes/'+prevApplicant!.resume);
    if(checkFile){
      await deleteFile('./uploads/resumes/'+prevApplicant.resume);
    }
    updateApplicantDto.resume = typeof file === 'string' ? file : file.filename;
    return await this.applicantsService.update(Number(id), updateApplicantDto);
  }

  // @Post('update/:id')
  // @ApiConsumes('multipart/form-data')
  // @UseAppFileInterceptor('resume', './uploads/resumes')
  // async updateWithFile(
  //   @Param('id') id: string,
  //   @Body() updateApplicantDto: UpdateApplicantDto,
  //   @UploadedFile() file: Express.Multer.File
  // ) {
  //   const prevApplicant = await this.applicantsService.findOne(Number(id));
  //   const checkFile = await fileExists('./uploads/resumes/'+prevApplicant!.resume);
  //   console.log(checkFile);
    
  //   if(prevApplicant?.resume && checkFile){
  //     deleteFile('./uploads/resumes/'+prevApplicant.resume);
  //   }
  //   updateApplicantDto.resume = typeof file === 'string' ? file : file.filename;
  //   return await this.applicantsService.update(+id, updateApplicantDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const prevApplicant = await this.applicantsService.findOne(Number(id));
    const checkResume = prevApplicant?.resume && await fileExists('./uploads/resumes/'+prevApplicant!.resume);
    if(checkResume){
      deleteFile('./uploads/resumes/'+prevApplicant.resume);
    }
    return await this.applicantsService.remove(+id);
  }
}
