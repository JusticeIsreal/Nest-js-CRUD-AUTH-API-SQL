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
    return this.userRepository.findOne({ where: { id: userId } });
  }
  postAUser(body: postUserBody) {
    return this.userRepository.save(body);
  }

  updateSingleUser(body: updateUserBody, userId: number) {
    return this.userRepository.update(userId, body);
  }
  deleteSingleUser(userId: number) {
    return this.userRepository.delete(userId);
  }

  // grab email for JWT Hashing
  findEmail(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }
}
