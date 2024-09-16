import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';

import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/core/entities/user.entity';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private createUserUseCase: CreateUserUseCase,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.getUserUseCase.execute({ username });
    const passwordHash = await bcrypt.compare(pass, user?.password_hash);
    if (!passwordHash || !user) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(userData: SignUpDto): Promise<any> {
    const existUser = await this.getUserUseCase.execute({
      username: userData.username,
    });
    if (existUser) {
      throw new BadRequestException(
        `have existed user with username: ${userData.username}`,
      );
    }
    await this.createUserUseCase.execute({ ...userData, role: Role.User });
  }
}
