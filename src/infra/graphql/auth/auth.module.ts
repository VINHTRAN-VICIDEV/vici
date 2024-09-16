import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
// import { AuthModule } from 'src/infra/http/auth/auth.module';
import { AuthService } from 'src/infra/http/auth/auth.service';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
// import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/infra/http/auth/auth.module';

@Module({
  providers: [AuthResolver, AuthService, CreateUserUseCase, GetUserUseCase],
  imports: [AuthModule],
  exports: [],
})
export class GraphQLAuthModule {}
