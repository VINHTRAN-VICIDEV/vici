import { OrderProduct } from '../entites/typeorm.order-product.entity';
import { TypeOrmBaseRepositoryAbstract } from './typeorm.generic.repository';

export class TypeOrmOrderProductRepository extends TypeOrmBaseRepositoryAbstract<OrderProduct> {}
