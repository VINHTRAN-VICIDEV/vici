import { Test } from '@nestjs/testing';
import { GetUserUseCase } from './get-user';
import { getModelToken } from '@nestjs/mongoose';
import { User } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { Role } from 'src/core/entities/user.entity';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

describe('GetUserUseCase', () => {
  let getUserUseCase;
  let userRepository;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetUserUseCase,
        {
          provide: UserRepositoryInterface,
          useValue: { findOneByCondition: jest.fn() },
        },
        { provide: getModelToken(User.name), useValue: {} },
      ],
    }).compile();

    getUserUseCase = moduleRef.get<GetUserUseCase>(GetUserUseCase);
    userRepository = moduleRef.get<UserRepositoryInterface>(
      UserRepositoryInterface,
    );
  });

  it('to be defined', () => {
    expect(getUserUseCase).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('get and return user data', async () => {
    const user = {
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'username1',
      password: 'password1',
      role: Role.User,
      deletedAt: null,
    };

    (userRepository.findOneByCondition as jest.Mock).mockResolvedValue(user);
    const result = await getUserUseCase.execute({});
    expect(result).toEqual(user);
  });
});
