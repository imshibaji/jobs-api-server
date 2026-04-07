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
import { UsersService } from './users.service';
import { User } from './users.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiConsumes, ApiProperty } from '@nestjs/swagger';
import { deleteFile, fileExists, UseAppFileInterceptor } from 'src/utils/app-file.interceptor';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiProperty()
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @ApiProperty({ type: String, required: true })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return await this.usersService.findOne(id);
  }

  @ApiProperty({ type: String, required: true })
  @Get('search/:prop/:value')
  searchBy(@Param('prop') prop: string, @Param('value') value: string) {
    return this.usersService.searchBy(prop, value);
  }

  @ApiProperty({ type: User })
  @ApiConsumes('multipart/form-data')
  @UseAppFileInterceptor('image', './uploads/pictures')
  @Post()
  async create(@Body() user: User, @UploadedFile() file: Express.Multer.File): Promise<User> {
    user.image = typeof file === 'string' ? file : file.filename;
    return await this.usersService.create(user);
  }

  @ApiProperty({ type: User })
  @Put(':id')
  @ApiConsumes('multipart/form-data')
  @UseAppFileInterceptor('image', './uploads/pictures')
  async update(
    @Param('id') id: number,
    @Body() user: User,
    @UploadedFile() file: Express.Multer.File
  ): Promise<UpdateResult> {
    const prevUser = await this.usersService.findOne(id);
    const checkImage = prevUser?.image && await fileExists('./uploads/pictures/'+prevUser!.image);
    if (checkImage) {
      deleteFile('./uploads/pictures/'+prevUser.image);
    }
    user.image = typeof file === 'string' ? file : file.filename;
    return await this.usersService.update(id, user);
  }

  // @ApiProperty({ type: User })
  // @ApiConsumes('multipart/form-data')
  // @UseAppFileInterceptor('image', './uploads/pictures')
  // @Post('update/:id')
  // async updateWithFile(
  //   @Param('id') id: number,
  //   @Body() user: User,
  //   @UploadedFile() file: Express.Multer.File
  // ): Promise<UpdateResult> {
  //   const prevUser = await this.usersService.findOne(id);
  //   if (prevUser?.image) {
  //     deleteFile(prevUser.image);
  //   }
  //   user.image = typeof file === 'string' ? file : file.filename;
  //   return await this.usersService.update(id, user);
  // }

  @ApiProperty({ type: String, required: true })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    const user = await this.usersService.findOne(id);
    const checkImage = user?.image && await fileExists('./uploads/pictures/'+user!.image);
    if (checkImage) {
      deleteFile('./uploads/pictures/'+user.image);
    }
    return await this.usersService.delete(id);
  }
}
