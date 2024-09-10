import { BaseEntity } from './base.entity';
import { Entity } from './entity';
import { Order } from './order.entity';
import { Product } from './product.entity';

export class OrderProductProps extends BaseEntity {
  order: Order;
  product: Product;
  price: string;
}

export class OrderProduct extends Entity<OrderProductProps> {
  constructor(orderProductProps: OrderProductProps) {
    super(orderProductProps);
  }
  get id() {
    return this.props.id;
  }
  get order() {
    return this.props.order;
  }
  get product() {
    return this.props.product;
  }
  get price() {
    return this.props.price;
  }
}
