import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';
import { User } from 'src/core/entities/user.entity';
import { FindAllResponse } from 'src/types/common.type';

class GetUserQuery {}
@Injectable()
export class GetUsersUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(query: GetUserQuery): Promise<FindAllResponse<User>> {
    return this.userRepository.findAll({ ...query });
  }
}
