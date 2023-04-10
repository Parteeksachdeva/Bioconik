import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password?: string;
}
