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
  employeeNumber: number;
  @IsString()
  joinDate: string;
  @IsString()
  userName: string;
  @IsString()
  affiliation: string;
  @IsString()
  businessSituation: string;
}

export class AuthLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
