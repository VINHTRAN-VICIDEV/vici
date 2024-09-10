import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { User as UserMongoose } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { BadRequestException } from '@nestjs/common';
import { Role } from 'src/core/entities/user.entity';
import { SoftDeleteUserUseCase } from './soft-delete-user';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

describe('CreateUserUseCase', () => {
  let softDeleteUserUseCase;
  let userRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        SoftDeleteUserUseCase,
        {
          provide: UserRepositoryInterface,
          useValue: { softDelete: jest.fn(), findOneByCondition: jest.fn() },
        },
        { provide: getModelToken(UserMongoose.name), useValue: {} },
      ],
    }).compile();

    softDeleteUserUseCase = moduleRef.get<SoftDeleteUserUseCase>(
      SoftDeleteUserUseCase,
    );
    userRepository = moduleRef.get<UserRepositoryInterface>(
      UserRepositoryInterface,
    );
  });

  it('to be defined', () => {
    expect(softDeleteUserUseCase).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('delete not exist user', async () => {
    const user = {
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'username1',
      password: 'password1',
      role: Role.User,
      deletedAt: null,
    };
    (userRepository.findOneByCondition as jest.Mock).mockResolvedValue(null);
    await expect(softDeleteUserUseCase.execute(user)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('soft delete and return user data', async () => {
    const user = {
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'username1',
      password: 'password1',
      role: Role.User,
      deletedAt: null,
    };
    (userRepository.findOneByCondition as jest.Mock).mockResolvedValue(user);
    (userRepository.softDelete as jest.Mock).mockResolvedValue(true);

    const result = await softDeleteUserUseCase.execute(user);
    expect(result).toEqual(true);
  });
});
