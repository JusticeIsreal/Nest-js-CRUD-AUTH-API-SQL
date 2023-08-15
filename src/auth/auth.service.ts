import { Body, Injectable } from '@nestjs/common';
import { postUserBody } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findEmail(email);

    if (!user) {
      return null;
    }
    if (user.password != password) {
      return null;
    }
    return user;
  }
}
