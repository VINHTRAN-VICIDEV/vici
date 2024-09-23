import { QueryFilter } from '../interfaces/query-function';
import { BaseRepositoryInterface } from './base.interface.repository';
import { Product } from 'src/core/entities/product.entity';

export abstract class ProductRepositoryInterface extends BaseRepositoryInterface<Product> {
  abstract findByCondition(
    condition?: QueryFilter,
    projection?: object,
  ): Promise<Product[] | any[]>;
}
