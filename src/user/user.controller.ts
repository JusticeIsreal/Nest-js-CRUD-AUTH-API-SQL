import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { postUserBody, updateUserBody } from './dto/user.dto';

@Controller('/user')
export class userController {
  constructor(private userService: UserService) {}
  @Get()
  readUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:userId')
  readAUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getSingleUser(userId);
  }

  @Post()
  postUser(@Body() body: postUserBody) {
    return this.userService.postAUser(body);
  }

  @Patch('/:userId')
  updateUser(
    @Body() body: updateUserBody,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.updateSingleUser(body, userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteSingleUser(userId);
  }
}
