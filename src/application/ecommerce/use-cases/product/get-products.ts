import { Injectable } from '@nestjs/common';
import { ProductRepositoryInterface } from '../../repository/product.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
import { Product } from 'src/core/entities/product.entity';

@Injectable()
export class GetProductsUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(): Promise<FindAllResponse<Product>> {
    return this.productRepository.findAll({});
  }
}
