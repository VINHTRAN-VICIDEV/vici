import { Module } from '@nestjs/common';
import { GraphQLUserModule } from './users/user.module';
import { GraphQLAuthModule } from './auth/auth.module';
import { GraphQLProductModule } from './products/product.module';

@Module({
  providers: [],
  imports: [GraphQLUserModule, GraphQLProductModule, GraphQLAuthModule],
  controllers: [],
  exports: [],
})
export class GraphQLModule {}
