import { BadGatewayException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';
import { Role, User } from 'src/core/entities/user.entity';

interface CreateUserUseCaseCommand {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
  role: Role;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: CreateUserUseCaseCommand) {
    const existUser = await this.userRepository.base.getOne({
      username: userData.username,
    });
    if (existUser) {
      throw new BadGatewayException();
    }
    const user = new User(userData);
    return this.userRepository.base.create(user);
  }
}
