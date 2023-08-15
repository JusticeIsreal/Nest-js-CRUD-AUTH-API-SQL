import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { postUserBody } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);
    console.log(user);
    if (!user) {
      return null;
    }
    if (user && user.password != password) {
      return null;
    }
    if (user && user.password == password) {
      return user;
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
