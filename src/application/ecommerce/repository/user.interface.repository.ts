import { User } from 'src/core/entities/user.entity';
import { BaseRepositoryInterface } from './base.interface.repository';

export abstract class UserRepositoryInterface extends BaseRepositoryInterface<User> {}
