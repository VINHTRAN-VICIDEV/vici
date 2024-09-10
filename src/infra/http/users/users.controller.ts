import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { GetUsersUseCase } from 'src/application/ecommerce/use-cases/user/get-users';
import { User } from 'src/core/entities/user.entity';
import { CreateUserDto } from './dto/request/create-user.dto';
import { CreateUserUseCase } from 'src/application/ecommerce/use-cases/user/create-user';
import { GetUserUseCase } from 'src/application/ecommerce/use-cases/user/get-user';
import { SoftDeleteUserUseCase } from 'src/application/ecommerce/use-cases/user/soft-delete-user';
import { DeleteUserDto } from './dto/request/delete-user.dto';
import { FindAllResponse } from 'src/types/common.type';
import { UserResponseDto } from './dto/response/user-response.dto';
import {
  toFindAllResponseDto,
  toResponseDto,
} from 'src/shared/helpers/to-response-dto';

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
  async getUsers(): Promise<FindAllResponse<UserResponseDto>> {
    const data = await this.getUsersUseCase.execute({});
    return toFindAllResponseDto(UserResponseDto, data);
  }

  @ApiBearerAuth()
  @Post('/')
  @Roles(['admin'])
  async createUser(@Body() userData: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.createUserUseCase.execute({ ...userData });
    return toResponseDto(UserResponseDto, user);
  }

  getUserDetail() {}

  @ApiBearerAuth()
  @ApiParam({ name: 'username', required: true, type: String })
  @Delete('/:username')
  @Roles(['admin'])
  async deleteUser(
    @Param()
    { username }: DeleteUserDto,
  ) {
    this.softDeleteUserUseCase.execute({ username });
  }
}
