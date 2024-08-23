import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: 'user',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      role: 'user',
    },
    {
      userId: 3,
      username: 'vinh',
      password: 'vinh123',
      role: 'admin',
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
  find(): User {
    return this.users;
  }
}
