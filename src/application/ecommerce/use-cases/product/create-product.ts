import { Injectable } from '@nestjs/common';
import { Product, ProductProps } from 'src/core/entities/product.entity';
import { ProductRepositoryInterface } from '../../repository/product.interface.repository';

@Injectable()
export class CreateProductsUseCase {
  constructor(private productRepository: ProductRepositoryInterface) {}

  async execute(productData: ProductProps): Promise<Product> {
    const product = new Product(productData);
    return this.productRepository.create(product.data);
  }
}
