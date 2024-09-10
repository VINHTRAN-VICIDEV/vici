import { BaseEntity } from './base.entity';
import { Entity } from './entity';
import { User } from './user.entity';

export class ProductProps extends BaseEntity {
  name: string;
  price: number;
  owner: User;
  amount: number;
}

export class Product extends Entity<ProductProps> {
  constructor(productProps: ProductProps) {
    super(productProps);
  }
  get id() {
    return this.props.id;
  }
  get name() {
    return this.props.name;
  }
  get price() {
    return this.props.price;
  }
  get owner() {
    return this.props.owner;
  }
  get amount() {
    return this.props.amount;
  }
}
