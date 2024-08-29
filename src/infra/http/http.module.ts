import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/products.module';

@Module({
  imports: [AuthModule, UserModule, ProductModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class HttpModule {}
