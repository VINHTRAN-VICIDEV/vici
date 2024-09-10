import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  @Min(0)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  amount: number;
}
