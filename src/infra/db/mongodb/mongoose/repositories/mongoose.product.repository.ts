import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product as ProductMongoose } from '../entities/mongoose.product.entity';
import { MongooseBaseRepositoryAbstract } from './mongoose.generic.repository';

export class MongooseProductRepository extends MongooseBaseRepositoryAbstract<ProductMongoose> {
  constructor(
    @InjectModel(ProductMongoose.name)
    private readonly product_repository: Model<ProductMongoose>,
  ) {
    super(product_repository);
  }
}
