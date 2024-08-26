import { Role, UserProps } from '../entities/user.entity';

export class UserUseCase {
  constructor() {}
  private readonly users: UserProps[] = [
    {
      id: '1',
      firstName: 'Tran',
      lastName: 'Vinh',
      username: 'admin',
      password: 'admin',
      role: Role.Admin,
    },
    {
      id: '2',
      firstName: 'Tran',
      lastName: 'Vinh2',
      username: 'user',
      password: 'user',
      role: Role.User,
    },
  ];

  getUsers(): UserProps[] {
    return this.users;
  }
  getUserByUsername(username: string): UserProps | undefined {
    return this.users.find((usr) => usr.username == username);
  }
}
