import { BaseRepositoryInterface } from 'src/application/ecommerce/repository/base.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
import { Repository } from 'typeorm';

export class TypeOrmBaseRepositoryAbstract<T>
  implements BaseRepositoryInterface<T>
{
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }
  create(dto: T | any): Promise<T> {
    return this._repository.save(dto);
  }
  findOneById(id: string, projection?: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findOneByCondition(condition?: object, projection?: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findAll(condition: object, options?: object): Promise<FindAllResponse<T>> {
    throw new Error('Method not implemented.');
  }
  update(id: string, dto: Partial<T>): Promise<T> {
    throw new Error('Method not implemented.');
  }
  softDelete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  permanentlyDelete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  // getAll(): Promise<T[]> {
  //   return this._repository.find({
  //     relations: ['user'],
  //   });
  // }

  // get(filter: any): Promise<T[]> {
  //   return this._repository.find(filter);
  // }

  // getOne(id: any): Promise<T> {
  //   return this._repository.findOne(id);
  // }

  // getOneBy(filter: Record<string, any>): Promise<T> {
  //   return this._repository.findOneBy(filter);
  // }

  // create(item: T): Promise<T> | T {
  //   return this._repository.create(item);
  // }

  // async updateOne(item: T): Promise<boolean> {
  //   this._repository.save(item);
  //   return true;
  // }

  // async deleteOne(id: string): Promise<boolean> {
  //   this._repository.softDelete(id);
  //   return true;
  // }
}
