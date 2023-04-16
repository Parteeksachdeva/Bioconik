import { Injectable } from '@nestjs/common';
import { hash, genSalt } from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password) {
      const salt = await genSalt(10);
      createUserDto.password = await hash(createUserDto.password, salt);
    }

    return await this.prisma['user'].create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma['user'].findMany({});
  }

  async findOne(id: number) {
    return await this.prisma['user'].findFirst({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.prisma['user'].findFirst({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma['user'].update({
      where: { id },
      data: updateUserDto,
    });
  }

  async delete(id: number) {
    return await this.prisma['user'].delete({ where: { id } });
  }
}
