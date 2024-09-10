import { BaseRepositoryInterface } from 'src/application/ecommerce/repository/base.interface.repository';
import { FindAllResponse } from 'src/types/common.type';
import { FindOptionsSelect, FindOptionsWhere, Not, Repository } from 'typeorm';

export class TypeOrmBaseRepositoryAbstract<T>
  implements BaseRepositoryInterface<T>
{
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }
  create(dto: T | any): Promise<T> {
    console.log(dto);
    return this._repository.save(dto);
  }
  findOneById(id: string, projection?: FindOptionsSelect<T>): Promise<T> {
    return this._repository.findOne({
      select: projection,
      where: { id } as any,
    });
  }
  findOneByCondition(
    condition?: FindOptionsWhere<T>,
    projection?: FindOptionsSelect<T>,
  ): Promise<T> {
    return this._repository.findOne({ select: projection, where: condition });
  }
  async findAll(
    condition: FindOptionsWhere<T>,
    options?: object,
  ): Promise<FindAllResponse<T>> {
    const [count, items] = await Promise.all([
      this._repository.count({ where: condition }),
      this._repository.find({ where: condition }),
    ]);
    return {
      count,
      items,
    };
  }
  async update(id: string, dto: Partial<T>): Promise<T> {
    const record = await this._repository.findOne({ id } as any);
    return this._repository.save({ ...record, ...dto });
  }
  async softDelete(id: string): Promise<boolean> {
    const record = await this._repository.findOne({
      where: { id, deleted_at: null },
    } as any);
    if (!record) return false;
    await this._repository.save({ ...record, deleted_at: new Date() });
    return true;
  }
  async permanentlyDelete(id: string): Promise<boolean> {
    const record = await this._repository.findOne({
      where: {
        id,
        deleted_at: Not(null),
      },
    } as any);
    if (!record) return false;
    await this._repository.delete({ id } as any);
    return true;
  }
}
