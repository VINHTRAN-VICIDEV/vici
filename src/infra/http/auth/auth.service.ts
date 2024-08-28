import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { SignUpDto } from './auth.dto';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
@Injectable()
export class AuthService {
  constructor(
    private getUserUseCase: GetUserUseCase,
    private createUserUseCase: CreateUserUseCase,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.getUserUseCase.execute({ username });
    if (user?.password !== pass || !user) {
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
        `have exist user with username: ${userData.username}`,
      );
    }
    this.createUserUseCase.execute(userData);
  }
}
