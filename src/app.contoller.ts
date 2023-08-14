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

@Controller({})
export class appController {
  @Get()
  getUsers() {
    return { name: 'justice' };
  }
  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }
  @Post()
  sendData(@Req() req: Request) {
    return req.body;
  }
  @Patch('/:userId')
  updateData(@Req() req: Request) {
    return req.body;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
