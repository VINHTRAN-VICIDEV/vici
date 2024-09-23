import { FindAllResponse } from 'src/types/common.type';
import { QueryFilter } from '../interfaces/query-function';

export abstract class BaseRepositoryInterface<T> {
  abstract create(dto: T | any): Promise<T>;

  abstract findOneById(id: string, projection?: object): Promise<T>;

  abstract findOneByCondition(
    condition?: QueryFilter,
    projection?: object,
  ): Promise<T>;

  abstract findAll(
    condition: QueryFilter,
    options?: object,
  ): Promise<FindAllResponse<T>>;

  abstract update(id: string, dto: Partial<T>): Promise<T>;

  abstract softDelete(id: string): Promise<boolean>;

  abstract permanentlyDelete(id: string): Promise<boolean>;
}
