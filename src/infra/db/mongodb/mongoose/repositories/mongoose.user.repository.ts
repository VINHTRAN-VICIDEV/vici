import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, User as UserMongoose } from '../entities/mongoose.user.entity';
import { Model } from 'mongoose';
import { MongooseBaseRepositoryAbstract } from './mongoose.generic.repository';

@Injectable()
export class MongooseUserRepository extends MongooseBaseRepositoryAbstract<UserMongoose> {
  constructor(
    @InjectModel(User.name)
    private readonly users_repository: Model<User>,
  ) {
    super(users_repository);
  }
}
