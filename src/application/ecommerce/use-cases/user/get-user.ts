import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities/user.entity';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';

class GetUserQuery {}
@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(query: GetUserQuery): Promise<User> {
    return this.userRepository.findOne({ ...query, deletedAt: null });
  }
}
