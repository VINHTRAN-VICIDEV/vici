import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';

class GetUserQuery {}
@Injectable()
export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(query: GetUserQuery) {
    return this.productRepository.base.getAll();
  }
}
