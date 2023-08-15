import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { userModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv'; // Import the config function from dotenv
import { JwtStrategy } from './jwt.strategy';

// Load environment variables from .env file
config();

@Module({
  controllers: [AuthController],
  imports: [
    userModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
