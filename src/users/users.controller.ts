import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from '../../src/decorator/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Roles(['user'])
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth()
  @Roles(['admin'])
  @Get('/')
  getUsers() {
    return this.usersService.find();
  }
}
