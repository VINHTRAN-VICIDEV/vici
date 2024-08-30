export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(filter: Record<string, any>): Promise<T[]>;

  abstract getOne(filter: Record<string, any>): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract updateOne(filter: Record<string, any>, item: T): Promise<boolean>;
}
