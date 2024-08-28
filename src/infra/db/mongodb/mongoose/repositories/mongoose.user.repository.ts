import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserMongoose } from '../entities/mongoose.user.entity';
import { Model } from 'mongoose';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class MongooseUserRepository implements UserRepository {
  constructor(
    @InjectModel(UserMongoose.name)
    private readonly userModel: Model<UserMongoose>,
  ) {}
  async find(): Promise<User[]> {
    return this.userModel.find();
  }
  async findOne(filter): Promise<User> {
    return this.userModel.findOne(filter);
  }
  async insertOne(user: User): Promise<void> {
    const newUser = new this.userModel(user.data);
    newUser.save();
  }
  async updateOne(filter): Promise<void> {
    return this.userModel.findOneAndUpdate(filter, { deletedAt: Date.now() });
  }
}
