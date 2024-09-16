import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';

@Module({
  providers: [UserResolver, GetUsersUseCase],
  imports: [],
  exports: [],
})
export class GraphQLUserModule {}
