import { Test } from '@nestjs/testing';
import { GetUsersUseCase } from './get-users';
import { Role } from 'src/core/entities/user.entity';
import { getModelToken } from '@nestjs/mongoose';
import { User } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';
import { UserRepositoryInterface } from '../../repository/user.interface.repository';

describe('GetUsersUseCase', () => {
  let getUsersUseCase;
  let userRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetUsersUseCase,
        {
          provide: UserRepositoryInterface,
          useValue: { findAll: jest.fn() },
        },
        { provide: getModelToken(User.name), useValue: {} },
      ],
    }).compile();
    getUsersUseCase = moduleRef.get<GetUsersUseCase>(GetUsersUseCase);
    userRepository = moduleRef.get<UserRepositoryInterface>(
      UserRepositoryInterface,
    );
  });

  it('should be defined', () => {
    expect(getUsersUseCase).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('get and return list of users', async () => {
    const user = [
      {
        firstName: 'Tran',
        lastName: 'Vinh',
        username: 'username1',
        password: 'password1',
        role: Role.User,
        deletedAt: null,
      },
    ];
    (userRepository.findAll as jest.Mock).mockResolvedValue(user);
    const result = await getUsersUseCase.execute();
    expect(result).toEqual(user);
  });
});
