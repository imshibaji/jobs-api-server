import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';

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


    @ApiProperty({ type: User })
    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }

    @ApiProperty({ type: User })
    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<UpdateResult> {
        return await this.usersService.update(id, user);
    }

    @ApiProperty({ type: String, required: true })
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<DeleteResult> {
        return await this.usersService.delete(id);
    }
}
