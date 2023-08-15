import { Body, Controller, Post } from '@nestjs/common';
import { postUserBody } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('/login')
  async login(@Body() body: postUserBody) {
    const user = await this.userService.findEmail(body.email);

    if (!user) {
      return 'unauthenticated';
    }
    if (user.password != body.password) {
      return 'incorrect password';
    }
    return user;
  }
}
