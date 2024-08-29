import { Product } from 'src/core/entities/product.entity';
import { IGenericRepository } from './base.repository';

export abstract class ProductRepository {
  base: IGenericRepository<any>;
  abstract getProducts(): Product[];
}
