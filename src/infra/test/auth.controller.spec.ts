import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from '../http/auth/auth.controller';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AuthService } from '../http/auth/auth.service';
import { ConfigService } from '@nestjs/config';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    //   const module: TestingModule = await Test.createTestingModule({
    //     imports: [],
    //     controllers: [AuthController],
    //     providers: [
    //       GetUserUseCase,
    //       CreateUserUseCase,
    //       JwtService,
    //       ConfigService,
    //       {
    //         provide: 'APP_GUARD',
    //         useClass: AuthGuard,
    //       },
    //     ],
    //   }).compile();
    //   controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
  });
});
