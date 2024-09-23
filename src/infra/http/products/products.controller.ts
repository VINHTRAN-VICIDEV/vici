import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { Public } from 'src/shared/decorators/auth.decorator';
import { CreateProductDto } from './dto/request/create-product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { toFindAllResponseDto } from 'src/shared/helpers/to-response-dto';
import { getProductsResponseDto } from './dto/response/get-products.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private getProductUseCase: GetProductsUseCase,
    private createProductsUseCase: CreateProductsUseCase,
  ) {}

  @ApiBearerAuth()
  @Get()
  async getProducts() {
    const data = await this.getProductUseCase.execute();
    return toFindAllResponseDto(getProductsResponseDto, data);
  }

  // @ApiBearerAuth()
  // @Public()
  // async getAvailableProducts() {
  //   const data = await this.getProductUseCase.execute();
  //   return toFindAllResponseDto(getProductsResponseDto, data);
  // }

  @ApiBearerAuth()
  @Post()
  @Roles(['admin'])
  createProduct(@Body() body: CreateProductDto) {
    return this.createProductsUseCase.execute(body);
  }
}
