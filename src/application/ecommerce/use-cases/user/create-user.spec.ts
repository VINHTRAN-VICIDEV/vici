import { Test } from '@nestjs/testing';
import { CreateUserUseCase } from './create-user';
import { UserRepository } from '../../repository/user.repository';
import { getModelToken } from '@nestjs/mongoose';
import { User as UserMongoose } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { BadRequestException } from '@nestjs/common';
import { Role } from 'src/core/entities/user.entity';

describe('CreateUserUseCase', () => {
  let createUserUseCase;
  let userRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: UserRepository,
          useValue: { base: { getOne: jest.fn(), create: jest.fn() } },
        },
        { provide: getModelToken(UserMongoose.name), useValue: {} },
      ],
    }).compile();

    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
    userRepository = moduleRef.get<UserRepository>(UserRepository);
  });

  it('to be defined', () => {
    expect(createUserUseCase).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('create an existed user', async () => {
    const user = {
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'username1',
      password: 'password1',
      role: Role.User,
      deletedAt: null,
    };
    (userRepository.base.getOne as jest.Mock).mockResolvedValue(user);
    await expect(createUserUseCase.execute(user)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('create and return user data', async () => {
    const user = {
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'username1',
      password: 'password1',
      role: Role.User,
      deletedAt: null,
    };
    (userRepository.base.getOne as jest.Mock).mockResolvedValue(null);
    (userRepository.base.create as jest.Mock).mockResolvedValue(user);

    const result = await createUserUseCase.execute(user);
    expect(result).toEqual(user);
  });
});
