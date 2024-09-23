import { Column, ManyToOne } from 'typeorm';
import { TypeOrmBaseEntity } from './typeorm.base.entity';
import { Order } from './typeorm.order.entity';
import { Product } from './typeorm.product.entity';

export class OrderProduct extends TypeOrmBaseEntity {
  @ManyToOne(() => Order)
  order: Order;
  @Column()
  product: Product;
  @Column()
  price: number;
}
