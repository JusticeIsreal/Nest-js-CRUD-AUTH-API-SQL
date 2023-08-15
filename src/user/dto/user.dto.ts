import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class postUserBody {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
export class updateUserBody {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
