import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product.repository';
import { Product } from 'src/core/entities/product.entity';
import { User } from 'src/core/entities/user.entity';

interface CreateProductUseCaseCommand {
  name: string;
  price: number;
  amount: number;
}

@Injectable()
export class CreateProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productData: CreateProductUseCaseCommand, sellerId) {
    const product = new Product();
    product.name = productData.name;
    product.price = productData.price;
    product.amount = productData.amount;
    product.seller = sellerId;

    return this.productRepository.base.create(product);
  }
}
