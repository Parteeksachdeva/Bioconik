import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/auth/common/user.decorator';

@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(@User() user: Record<string, any>) {
    console.log(user);
    return await this.usersService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return await this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return await this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   return await this.usersService.delete(+id);
  // }
}
