import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @MinLength(3)
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  password: string;
}
