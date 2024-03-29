import {
  Controller,
  Get,
  Query,
  UseGuards,
  Req,
  // NotFoundException,
  // BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { user } from '@prisma/client';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('loginUser')
  getLoginUser(@Req() req: Request): Omit<user, 'hashedPassword'> {
    return req.user;
  }

  @Get()
  async getUser(@Query('userId') userId: number) {
    return await this.userService.getUserById(userId);
  }
}
