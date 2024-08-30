import { IGenericRepository } from './base.repository';

export abstract class UserRepository {
  base: IGenericRepository<any>;
  abstract deleteOne(filter: Record<string, any>);
}
