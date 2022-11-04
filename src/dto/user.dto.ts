import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
export class userDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @MaxLength(3, { message: 'Max three digits are allowed' })
  designation: number;
}
