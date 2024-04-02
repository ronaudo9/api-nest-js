import {
  IsEmail,
  IsString,
  IsInt,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
  @IsInt()
  employeeNumber: number;
  @IsInt()
  userId: number;
  @IsString()
  joinDate: string;
  @IsString()
  userName: string;
  @IsString()
  affiliation: string;
  @IsString()
  businessSituation: string;
}

export class UserUpdateDto {
  @IsInt()
  userId: number;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
