import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { Public } from 'src/shared/decorators/auth.decorator';
import { CreateProductDto } from './dto/request/create-product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private getProductUseCase: GetProductsUseCase,
    private createProductsUseCase: CreateProductsUseCase,
  ) {}
  @Public()
  @Get()
  getProducts() {
    return this.getProductUseCase.execute();
  }

  @ApiBearerAuth()
  @Post()
  createProduct(@Body() body: CreateProductDto, @Request() req) {
    const productData = {
      ...body,
      owner: req.user.sub,
    };
    return this.createProductsUseCase.execute(productData);
  }
}
