import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { userModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  imports: [userModule],
})
export class AuthModule {}
