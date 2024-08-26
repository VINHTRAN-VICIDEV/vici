import { Controller, Get } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserUseCase } from 'src/core/use-cases/user.use-case';

@Roles(['user'])
@Controller('users')
export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  @ApiBearerAuth()
  @Roles(['admin'])
  @Get('/')
  getUsers() {
    return this.userUseCase.getUsers();
  }
}
