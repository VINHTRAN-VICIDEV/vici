import { IGenericRepository } from './base.repository';

export abstract class ProductRepository {
  base: IGenericRepository<any>;
}
