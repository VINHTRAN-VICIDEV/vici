import { Test } from '@nestjs/testing';
import { CreateUserUseCase } from './create-user';
import { getModelToken } from '@nestjs/mongoose';
import { User as UserMongoose } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { BadRequestException } from '@nestjs/common';
import { Role } from 'src/core/entities/user.entity';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

describe('CreateUserUseCase', () => {
  let createUserUseCase;
  let userRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: UserRepositoryInterface,
          useValue: {
            create: jest.fn(),
            findOneByCondition: jest.fn(),
          },
        },
        { provide: getModelToken(UserMongoose.name), useValue: {} },
      ],
    }).compile();

    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
    userRepository = moduleRef.get<UserRepositoryInterface>(
      UserRepositoryInterface,
    );
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
    (userRepository.findOneByCondition as jest.Mock).mockResolvedValue(user);
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
    (userRepository.findOneByCondition as jest.Mock).mockResolvedValue(null);
    (userRepository.create as jest.Mock).mockResolvedValue(user);

    const result = await createUserUseCase.execute(user);
    expect(result).toEqual(user);
  });
});
