import { BaseEntity } from './base.entity';
import { Entity } from './entity';
import { OrderProduct } from './order-product.entity';
import { User } from './user.entity';

export enum OrderStatus {
  STRIPE = 'stripe',
}
export class OrderProps extends BaseEntity {
  owner: User;
  total: number;
  status: OrderStatus;
  paymentId?: string;
  orderProduct: OrderProduct[];
}

export class Order extends Entity<OrderProps> {
  constructor(orderProps: OrderProps) {
    super(orderProps);
  }
  get id() {
    return this.props.id;
  }
  get owner() {
    return this.props.owner;
  }
  get total() {
    return this.props.total;
  }
  get status() {
    return this.props.status;
  }
  get paymentId() {
    return this.props.paymentId;
  }
  get orderProduct() {
    return this.props.orderProduct;
  }
}
