import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';

class GetUserQuery {}
@Injectable()
export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(query: GetUserQuery) {
    return this.userRepository.find({ ...query, deletedAt: null });
  }
}
