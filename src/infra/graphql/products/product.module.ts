import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';

@Module({
  providers: [ProductResolver, GetProductsUseCase],
  imports: [],
  exports: [],
})
export class GraphQLProductModule {}
