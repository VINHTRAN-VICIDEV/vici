import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from 'src/infra/http/auth/auth.service';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
@Module({
  imports: [],
  providers: [GetUserUseCase, CreateUserUseCase, AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
