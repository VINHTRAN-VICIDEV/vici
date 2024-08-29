import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { Public } from 'src/shared/decorators/auth.decorator';
import { CreateProductDto } from '../dto/create-product.dto';
import { User } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
  constructor(
    private getProductUseCase: GetProductsUseCase,
    private createProductsUseCase: CreateProductsUseCase,
  ) {}
  @Public()
  @Get()
  getProducts() {
    return this.getProductUseCase.execute({});
  }

  @ApiBearerAuth()
  @Post()
  createProduct(@Body() body: CreateProductDto, @Request() req) {
    console.log(req.user.sub);
    this.createProductsUseCase.execute(body, req.user.sub);
  }
}
