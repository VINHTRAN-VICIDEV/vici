import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';
import { CreateProductsUseCase } from 'src/application/ecommerce/use-cases/product/create-product';

@Module({
  providers: [GetProductsUseCase, CreateProductsUseCase],
  controllers: [ProductController],
})
export class ProductModule {}
