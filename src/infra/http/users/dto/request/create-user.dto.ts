import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/core/entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @MinLength(3)
  @MaxLength(10)
  lastName?: string;

  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @ApiProperty()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty({ enum: Role, enumName: 'role' })
  role: Role;
}
