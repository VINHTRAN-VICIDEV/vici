import { BadRequestException, Injectable } from '@nestjs/common';

import { Role, User } from 'src/core/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

interface CreateUserUseCaseCommand {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
  role?: Role;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute({
    firstName,
    lastName,
    username,
    password,
    phoneNumber,
    address,
    role,
  }: CreateUserUseCaseCommand): Promise<User> {
    const existUser = await this.userRepository.findOneByCondition({
      username: { eq: username },
    });
    if (existUser) {
      throw new BadRequestException(
        `have existed user with username: ${username}`,
      );
    }
    const passwordHash = await bcrypt.hash(password, password.length);
    const user = new User({
      first_name: firstName,
      last_name: lastName,
      username,
      password_hash: passwordHash,
      phone_number: phoneNumber,
      address,
      role,
    });
    return this.userRepository.create(user.data);
  }
}
