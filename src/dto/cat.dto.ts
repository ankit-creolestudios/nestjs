import { IsNotEmpty, MaxLength } from 'class-validator';
export class catDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MaxLength(2, { message: 'Max two digits are allowed' })
  age: number;

  breed: string;
}
