import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/products.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, ProductModule],
  providers: [
    JwtService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
  controllers: [],
  exports: [],
})
export class HttpModule {}
