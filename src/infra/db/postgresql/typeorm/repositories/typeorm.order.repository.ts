import { Order } from '../entites/typeorm.order.entity';
import { TypeOrmBaseRepositoryAbstract } from './typeorm.generic.repository';

export class TypeOrmOrderRepository extends TypeOrmBaseRepositoryAbstract<Order> {}
