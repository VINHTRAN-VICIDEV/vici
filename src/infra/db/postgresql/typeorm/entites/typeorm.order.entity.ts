import { OrderStatus, PaymentMethod } from 'src/core/entities/order.entity';
import { TypeOrmBaseEntity } from './typeorm.base.entity';
import { User } from './typeorm.user.entity';
import { Column, JoinColumn, OneToOne } from 'typeorm';
import { OrderProduct } from './typeorm.order-product.entity';

export class Order extends TypeOrmBaseEntity {
  @OneToOne(() => User)
  @JoinColumn()
  owner: User;

  @Column()
  total: number;

  @Column({ enum: OrderStatus, default: OrderStatus.OPEN })
  status: string;

  @Column()
  paymentId?: string;

  @Column({ enum: PaymentMethod, default: PaymentMethod.STRIPE })
  paymentMethod: string;

  @Column()
  orderProducts: OrderProduct[];
}
