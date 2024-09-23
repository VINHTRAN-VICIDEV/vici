import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductRepositoryInterface } from '../../repository/product.interface.repository';

class OrderItemCommand {
  product_id: string;
  amount: number;
}

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly productRepository: ProductRepositoryInterface) {}
  async execute(items: OrderItemCommand[]) {
    const productIds = items.map((item) => item.product_id);
    const products = await this.productRepository.findByCondition(
      { id: { in: productIds } },
      { id: true, amount: true, name: true },
    );
    const emptyProducts = products.filter((product) => product.amount == 0);
    if (emptyProducts.length) {
      const productNames = emptyProducts.map((item) => item.name).join();
      throw new BadRequestException(`product ${productNames} are empty`);
    }
  }
}
