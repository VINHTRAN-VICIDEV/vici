import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';

@Injectable()
export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute() {
    return this.productRepository.base.getAll();
  }
}
