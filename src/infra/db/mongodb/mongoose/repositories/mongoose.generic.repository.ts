import { Model, PopulateOptions } from 'mongoose';
import { IGenericRepository } from 'src/application/ecommerce/repository/base.repository';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[] | PopulateOptions;

  constructor(
    repository: Model<T>,
    populateOnFind: string[] | PopulateOptions = [],
  ) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(filter: any): Promise<T[]> {
    return this._repository.find(filter).populate(this._populateOnFind).exec();
  }
  getOne(filter: any): Promise<T> {
    return this._repository
      .findOne(filter)
      .populate(this._populateOnFind)
      .exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  updateOne(filter: Record<string, any>, item: T): Promise<boolean> {
    return this._repository.findOneAndUpdate(filter, item);
  }
}
