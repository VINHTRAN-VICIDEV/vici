export abstract class BaseRepository<Entity> {
  protected entity: Entity;
  protected constructor(entity: Entity) {
    this.entity = entity;
  }
  abstract find(query): Promise<Entity[]>;
  abstract findOne(query): Promise<Entity>;

  abstract updateMany(query, entity: Entity): void | Promise<Entity>;
  abstract updateOne(query, entity: Entity): void | Promise<Entity[]>;

  abstract deleteMany(query): void;
  abstract deleteOne(query): void;

  abstract insertOne(entity: Entity): void;
  abstract insertMany(entities: Entity[]): void;
}
