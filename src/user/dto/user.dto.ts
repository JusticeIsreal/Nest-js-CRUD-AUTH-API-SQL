import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class postUserBody {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: any;
}
export class updateUserBody {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
