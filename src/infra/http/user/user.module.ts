import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { UserUseCase } from 'src/core/use-cases/user.use-case';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserUseCase],
  controllers: [UserController],
  providers: [
    JwtService,
    UserUseCase,

    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [],
})
export class UserModule {}
