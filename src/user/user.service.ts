import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { postUserBody, updateUserBody } from './dto/user.dto';

@Injectable()
export class UserService {
  getAllUsers() {
    return { name: 'justice' };
  }
  getSingleUser(userId: number) {
    return { userId };
  }
  postAUser(body: postUserBody) {
    return body;
  }
  updateSingleUser(body: updateUserBody, userId: number) {
    return { body: body, userId };
  }
  deleteSingleUser(userId: number) {
    return { userId };
  }
}
