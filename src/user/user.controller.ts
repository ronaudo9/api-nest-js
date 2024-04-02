import {
  Controller,
  Get,
  Query,
  UseGuards,
  Req,
  Body,
  Patch,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { user } from '@prisma/client';
import { Request } from 'express';
import { UserUpdateDto } from './dto/user.dto';
import { User } from '../../types/type';
@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('loginUser')
  getLoginUser(@Req() req: Request): Omit<User, 'password'> {
    return req.user;
  }

  @Get()
  async getUser(
    @Query('userId') userId: number,
  ): Promise<Omit<User, 'password'>> {
    return await this.userService.getUserById(userId);
  }

  @Patch()
  async updateUser(
    @Query('userId') userId: number,
    @Body() dto: UserUpdateDto,
  ): Promise<Omit<user, 'password' | 'deletedAt'>> {
    if (isNaN(userId)) {
      throw new BadRequestException('userId must be an integer');
    }
    return await this.userService.updateUser(userId, dto);
  }
}
