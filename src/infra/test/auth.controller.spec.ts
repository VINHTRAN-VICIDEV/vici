import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from '../http/auth/auth.controller';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AuthService } from '../http/auth/auth.service';
import { UserUseCase } from 'src/core/use-cases/user.use-case';
import { ConfigService } from '@nestjs/config';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        UserUseCase,
        AuthService,
        JwtService,
        ConfigService,
        {
          provide: 'APP_GUARD',
          useClass: AuthGuard,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
