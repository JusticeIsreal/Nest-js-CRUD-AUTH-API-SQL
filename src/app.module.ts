import { Module } from '@nestjs/common';
import { appController } from './app.contoller';

@Module({
  controllers: [appController],
})
export class AppModule {}
