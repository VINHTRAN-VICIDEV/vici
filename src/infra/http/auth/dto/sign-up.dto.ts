import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
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
  @Matches('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$')
  phoneNumber: string;
}
