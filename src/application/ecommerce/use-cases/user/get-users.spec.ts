import { Test } from '@nestjs/testing';
import { GetUsersUseCase } from './get-users';
import { UserRepository } from '../../repository/user.interface.repository';
import { Role } from 'src/core/entities/user.entity';
import { getModelToken } from '@nestjs/mongoose';
import { User } from 'src/infra/db/mongodb/mongoose/entities/mongoose.user.entity';

describe('GetUsersUseCase', () => {
  let getUsersUseCase;
  let userRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetUsersUseCase,
        { provide: UserRepository, useValue: { base: { get: jest.fn() } } },
        { provide: getModelToken(User.name), useValue: {} },
      ],
    }).compile();
    getUsersUseCase = moduleRef.get<GetUsersUseCase>(GetUsersUseCase);
    userRepository = moduleRef.get<UserRepository>(UserRepository);
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
    (userRepository.base.get as jest.Mock).mockResolvedValue(user);
    const result = await getUsersUseCase.execute();
    expect(result).toEqual(user);
  });
});
