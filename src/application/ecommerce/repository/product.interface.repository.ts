import { BaseRepositoryInterface } from './base.interface.repository';
import { Product } from 'src/core/entities/product.entity';

export abstract class ProductRepositoryInterface extends BaseRepositoryInterface<Product> {}
