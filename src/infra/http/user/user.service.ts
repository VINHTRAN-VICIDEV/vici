import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';

@Injectable()
export class UserService {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private GetUserUseCase: GetUserUseCase,
  ) {}
}
