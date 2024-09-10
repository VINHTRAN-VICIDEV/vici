import { Injectable } from '@nestjs/common';
// import { User } from 'src/core/entities/user.entity';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';
import { User } from 'src/core/entities/user.entity';

class GetUserQuery {}
@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(query: GetUserQuery): Promise<User> {
    return this.userRepository.findOneByCondition({ ...query });
  }
}
