import { Controller, Get, Post } from '@nestjs/common';

@Controller({})
export class appController {
  @Get()
  getUser() {
    return { name: 'justice' };
  }
    @Post()
    sendData() {
        return "i am sending  data"
    }
}
