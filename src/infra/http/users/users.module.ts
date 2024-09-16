import { Module } from '@nestjs/common';
import { UserController } from './users.controller';

import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { SoftDeleteUserUseCase } from 'src/application/ecommerce/use-cases/user/soft-delete-user';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    GetUserUseCase,
    SoftDeleteUserUseCase,
    GetUsersUseCase,
  ],
  exports: [],
})
export class UserModule {}
