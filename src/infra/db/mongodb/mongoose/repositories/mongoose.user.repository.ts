import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserMongoose } from '../entities/mongoose.user.entity';
import { Model } from 'mongoose';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';
import { MongoGenericRepository } from './mongoose.generic.repository';

@Injectable()
export class MongooseUserRepository
  implements UserRepository, OnApplicationBootstrap
{
  base: MongoGenericRepository<UserMongoose>;
  constructor(
    @InjectModel(UserMongoose.name)
    private readonly userRepository: Model<UserMongoose>,
  ) {}

  deleteOne(filter: Record<string, any>): void {
    this.userRepository.updateOne(filter, { deletedAt: Date.now() });
  }
  onApplicationBootstrap() {
    this.base = new MongoGenericRepository(this.userRepository);
  }
}
