import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JoiningsService } from './joinings.service';
import { CreateJoiningDto } from './dto/create-joining.dto';
import { UpdateJoiningDto } from './dto/update-joining.dto';

@Controller('joinings')
export class JoiningsController {
  constructor(private readonly joiningsService: JoiningsService) {}

  @Post()
  create(@Body() createJoiningDto: CreateJoiningDto) {
    return this.joiningsService.create(createJoiningDto);
  }

  @Get()
  findAll() {
    return this.joiningsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.joiningsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJoiningDto: UpdateJoiningDto) {
    return this.joiningsService.update(+id, updateJoiningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.joiningsService.remove(+id);
  }
}
