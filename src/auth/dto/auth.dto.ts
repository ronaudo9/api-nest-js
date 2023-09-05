import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsInt,
} from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
  @IsInt()
  @IsNotEmpty()
  employeeNumber: number;
  @IsString()
  @IsNotEmpty()
  joinDate: string;
  @IsString()
  @IsNotEmpty()
  userName: string;
  @IsString()
  @IsNotEmpty()
  affiliation: string;
  @IsString()
  @IsNotEmpty()
  businessSituation: string;
}
