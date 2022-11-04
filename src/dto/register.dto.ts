import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
export class registerDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  dateofbirth: string;

  @IsNotEmpty()
  @Matches(/^[a-zA-z]$/)
  @MinLength(8, { message: 'Password must be 8 character long' })
  @MaxLength(15, { message: 'Max 15 characters are allowed' })
  password: string;
}
