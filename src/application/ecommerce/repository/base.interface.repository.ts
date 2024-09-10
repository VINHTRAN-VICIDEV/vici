import { FindAllResponse } from 'src/types/common.type';

export abstract class BaseRepositoryInterface<T> {
  abstract create(dto: T | any): Promise<T>;

  abstract findOneById(id: string, projection?: object): Promise<T>;

  abstract findOneByCondition(
    condition?: object,
    projection?: object,
  ): Promise<T>;

  abstract findAll(
    condition: object,
    options?: object,
  ): Promise<FindAllResponse<T>>;

  abstract update(id: string, dto: Partial<T>): Promise<T>;

  abstract softDelete(id: string): Promise<boolean>;

  abstract permanentlyDelete(id: string): Promise<boolean>;
}
