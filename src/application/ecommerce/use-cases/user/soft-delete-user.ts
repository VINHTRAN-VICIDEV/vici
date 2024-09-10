import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

@Injectable()
export class SoftDeleteUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(query): Promise<boolean> {
    const existUser = await this.userRepository.findOneByCondition(query);
    if (!existUser) {
      throw new BadRequestException();
    }
    this.userRepository.softDelete(existUser.id);
    return true;
  }
}
