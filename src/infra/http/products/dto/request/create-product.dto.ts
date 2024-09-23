import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class Tag {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  description: string;
}
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

  @ApiProperty()
  tags: Tag[];
}
