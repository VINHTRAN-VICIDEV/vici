import { User } from 'src/core/entities/user.entity';

export abstract class UserRepository {
  abstract find(query): Promise<User[]>;
  abstract findOne(query): Promise<User>;
  abstract insertOne(user: User): Promise<void>;
  abstract updateOne(query, user: User): Promise<void>;
  abstract deleteOne(query): Promise<void>;
}
