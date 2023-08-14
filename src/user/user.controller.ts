import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class userController {
  constructor(private userService: UserService) {}
  @Get()
  readUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:userId')
  readAUser(@Param() param: { userId: number }) {
    return this.userService.getSingleUser(param);
  }

  @Post()
  postUser(@Req() req: Request) {
    return this.userService.postAUser(req);
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.updateSingleUser(req, param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteSingleUser(param);
  }
}
