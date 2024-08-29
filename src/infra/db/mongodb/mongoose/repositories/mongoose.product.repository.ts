import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PopulateOptions } from 'mongoose';
import { ProductRepository } from 'src/application/ecommerce/repository/product.repository';
import { Product } from 'src/core/entities/product.entity';
import { Product as ProductMongoose } from '../entities/mongoose.product.entity';
import { MongoGenericRepository } from './mongoose.generic.repository';

export class MongooseProductRepository
  implements ProductRepository, OnApplicationBootstrap
{
  base: MongoGenericRepository<ProductMongoose>;
  constructor(
    @InjectModel(ProductMongoose.name)
    private productRepository: Model<ProductMongoose>,
  ) {}

  getProducts(): Product[] {
    return [];
  }
  onApplicationBootstrap() {
    const populateOpts: PopulateOptions = {
      path: 'seller',
      select: 'firstName lastName username role',
    };
    this.base = new MongoGenericRepository(
      this.productRepository,
      populateOpts,
    );
  }
}
