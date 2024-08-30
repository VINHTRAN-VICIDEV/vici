import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';

@Injectable()
export class SoftDeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(query) {
    const existUser = await this.userRepository.base.getOne(query);
    if (!existUser) {
      throw new BadRequestException();
    }
    this.userRepository.deleteOne(query);
  }
}
