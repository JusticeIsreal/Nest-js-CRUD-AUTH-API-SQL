import { Module } from '@nestjs/common';
import { appController } from './app.contoller';
import { userController } from './user/user.controller';

@Module({
  controllers: [appController, userController],
})
export class AppModule {}
