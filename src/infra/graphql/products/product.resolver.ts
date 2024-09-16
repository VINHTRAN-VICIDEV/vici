import { Query, Resolver } from '@nestjs/graphql';
import { ProductEntity } from './entites/product.entity';
import { Public } from 'src/shared/decorators/auth.decorator';
import { ProductList } from './entites/product-list.entity';
import { FindAllResponse } from 'src/types/common.type';
import { GetProductsUseCase } from 'src/application/ecommerce/use-cases/product/get-products';

@Public()
@Resolver('Product')
export class ProductResolver {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  @Query(() => ProductList)
  products(): Promise<FindAllResponse<ProductEntity>> {
    return this.getProductsUseCase.execute();
  }
}
