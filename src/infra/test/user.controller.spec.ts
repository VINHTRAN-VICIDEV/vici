import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from 'src/infra/http/user/user.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { ConfigService } from '@nestjs/config';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { SoftDeleteUserUseCase } from 'src/application/ecommerce/use-cases/user/soft-delete-user';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    //   const module: TestingModule = await Test.createTestingModule({
    //     controllers: [UserController],
    //     providers: [
    //       JwtService,
    //       GetUserUseCase,
    //       GetUsersUseCase,
    //       CreateUserUseCase,
    //       SoftDeleteUserUseCase,
    //       ,
    //       {
    //         provide: APP_GUARD,
    //         useClass: AuthGuard,
    //       },
    //       {
    //         provide: APP_GUARD,
    //         useClass: RolesGuard,
    //       },
    //       ConfigService,
    //     ],
    //   }).compile();
    //   controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
  });
});
