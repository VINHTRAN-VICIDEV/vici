import { Product } from 'src/core/entities/product.entity';
import { Product as MongooseProduct } from '../entities/mongoose.product.entity';
import { MongooseUserMapper } from './mongoose-user-mapper';

export class MongooseProductMapper {
  static toDomain(entity: MongooseProduct): Product {
    const domainUser = MongooseUserMapper.toDomain(entity.owner);
    const model = new Product({
      id: entity.id.toString(),
      price: entity.price,
      amount: entity.amount,
      name: entity.name,
      owner: domainUser,
    });
    return model;
  }
  static toMongoose(entity: Product): MongooseProduct {
    const product = new MongooseProduct();
    const owner = MongooseUserMapper.toMongoose(entity.owner);
    product.price = entity.price;
    product.amount = entity.amount;
    product.name = entity.name;
    product.owner = owner;
    return product;
  }
  static toCreateMongoose(entity: Product): MongooseProduct {
    const product = new MongooseProduct();
    const owner = MongooseUserMapper.toMongoose(entity.owner);
    product.price = entity.price;
    product.amount = entity.amount;
    product.name = entity.name;
    product.owner = owner;
    return product;
  }
}
