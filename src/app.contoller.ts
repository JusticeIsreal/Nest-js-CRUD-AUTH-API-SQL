import { Controller, Get } from '@nestjs/common';

@Controller({})
export class appController {
  @Get()
  getUser(): string {
    return 'i am the user';
  }
}
