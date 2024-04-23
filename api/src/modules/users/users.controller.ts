import { Controller, Get } from '@nestjs/common';

import { LoggedUserId } from 'src/shared/decorators/LoggedUserId';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@LoggedUserId() userId: string) {
    console.log({ userId }); //
    return this.usersService.getUserById(userId);
  }
}
