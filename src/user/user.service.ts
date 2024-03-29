import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { UserDto } from './dto/user.dto';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUserById(userId: number): Promise<Partial<user>> {
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
          },
        },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return {
        userId: user.userId,
        userName: user.userName,
        affiliation: user.affiliation,
        employeeNumber: user.employeeNumber,
        joinDate: user.joinDate,
        businessSituation: user.businessSituation,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw error;
    }
  }
}
