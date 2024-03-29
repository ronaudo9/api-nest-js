import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsInt,
  IsOptional,
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
  @IsOptional()
  employeeNumber: number;
  @IsString()
  @IsOptional()
  joinDate: string;
  @IsString()
  @IsOptional()
  userName: string;
  @IsString()
  @IsOptional()
  affiliation: string;
  @IsString()
  @IsOptional()
  businessSituation: string;
}
