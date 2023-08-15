import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { postUserBody } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Body() body: postUserBody) {
    return this.authService.validateUser(body.email, body.password);
  }
}
