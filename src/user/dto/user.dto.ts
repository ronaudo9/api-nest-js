import {
  IsEmail,
  // IsNotEmpty,
  IsString,
  // MinLength,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsInt()
  @IsOptional()
  employeeNumber: number;
  @IsInt()
  @IsOptional()
  userId: number;
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
  @IsString()
  @IsOptional()
  createdAt: string;
  @IsString()
  @IsOptional()
  updatedAt: string;
}
