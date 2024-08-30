import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { User } from 'src/core/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { SoftDeleteUserUseCase } from 'src/application/ecommerce/use-cases/user/soft-delete-user';
import { DeleteUserDto } from '../dto/delete-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private getUsersUseCase: GetUsersUseCase,
    private createUserUseCase: CreateUserUseCase,
    private getUserUseCase: GetUserUseCase,
    private softDeleteUserUseCase: SoftDeleteUserUseCase,
  ) {}

  @ApiBearerAuth()
  @Roles(['admin'])
  @Get('/')
  getUsers(): Promise<User[]> {
    return this.getUsersUseCase.execute({});
  }

  @ApiBearerAuth()
  @Post('/')
  @Roles(['admin'])
  async createUser(@Body() userData: CreateUserDto) {
    return this.createUserUseCase.execute(userData);
  }

  getUserDetail() {}

  @ApiBearerAuth()
  @ApiParam({ name: 'username', required: true, type: String })
  @Delete('/:username')
  @Roles(['admin'])
  async deleteUser(@Param() param: DeleteUserDto) {
    this.softDeleteUserUseCase.execute({ username: param.username });
  }
}
