import { Module } from '@nestjs/common';
import { appController } from './app.contoller';
import { userModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [appController],
  imports: [
    userModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3719462058',
      database: null,
      entities: [],
      synchronize: true,
      extra: {
        authPlugin: 'mysql_native_password',
      },
      logging: true,
      logger: 'advanced-console',
    }),
  ],
})
export class AppModule {}
