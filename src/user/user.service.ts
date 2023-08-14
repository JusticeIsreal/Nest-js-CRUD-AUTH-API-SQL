import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getAllUsers() {
    return { name: 'justice' };
  }
  getSingleUser(param: { userId: number }) {
    return param;
  }
  postAUser(req: Request) {
    return req.body;
  }
  updateSingleUser(req: Request, param: { userId: number }) {
    return req.body;
  }
  deleteSingleUser(param: { userId: number }) {
    return param;
  }
}
