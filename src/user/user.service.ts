import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { user } from '@prisma/client';
import { UserUpdateDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../../types/type';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUserById(userId: number): Promise<Omit<User, 'password'>> {
    if (!userId) {
      throw new BadRequestException('userIdを指定してください');
    }

    let user;
    const NumUserId = Number(userId);
    try {
      user = await this.prisma.user.findUnique({
        where: { userId: NumUserId },
        include: {
          skills: true,
          skillPoints: true,
          specialAbilities: true,
          specs: {
            where: { searches: true },
            include: {
              portfolios: true,
              skillSummaries: true,
              sellingPoints: true,
              qualifications: true,
              previousWorks: true,
              developmentExperiences: true,
              finds: true,
            },
          },
        },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }

  async updateUser(
    userId: number,
    dto: UserUpdateDto,
  ): Promise<Omit<user, 'password' | 'deletedAt'>> {
    if (!userId) {
      throw new BadRequestException('userIdを指定してください');
    }
    const NumUserId = Number(userId);
    const hashed = await bcrypt.hash(dto.password, 12);
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          userId: NumUserId,
        },
      });
      const isValid = await bcrypt.compare(user.password, hashed);
      if (!isValid)
        throw new ForbiddenException(
          'The password is the same as the previously used one',
        );
      const updatedUser = await this.prisma.user.update({
        where: { userId: NumUserId },
        data: {
          email: dto.email,
          password: hashed,
        },
        select: {
          userId: true,
          email: true,
          employeeNumber: true,
          joinDate: true,
          userName: true,
          affiliation: true,
          businessSituation: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      console.log(updatedUser);
      return updatedUser;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }
}
