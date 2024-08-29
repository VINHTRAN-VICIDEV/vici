import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { APP_GUARD } from '@nestjs/core';
import { SoftDeleteUserUseCase } from 'src/application/ecommerce/use-cases/user/soft-delete-user';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    JwtService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    CreateUserUseCase,
    GetUserUseCase,
    SoftDeleteUserUseCase,
    GetUsersUseCase,
  ],
  exports: [],
})
export class UserModule {}
