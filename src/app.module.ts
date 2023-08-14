import { Module } from '@nestjs/common';
import { appController } from './app.contoller';
import { userModule } from './user/user.module';

@Module({
  controllers: [appController],
  imports: [userModule],
})
export class AppModule {}
