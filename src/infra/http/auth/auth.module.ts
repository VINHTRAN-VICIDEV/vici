import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AuthService } from 'src/infra/http/auth/auth.service';
import { ConfigService } from '@nestjs/config';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3 days' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    GetUserUseCase,
    CreateUserUseCase,
    AuthService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
