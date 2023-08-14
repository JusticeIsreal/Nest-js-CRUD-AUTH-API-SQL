import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { postUserBody, updateUserBody } from './dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
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
