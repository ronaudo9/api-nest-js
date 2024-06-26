import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          let jwt = null;
          if (req && req.cookies) {
            jwt = req.cookies['access_token'];
          }
          return jwt;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        userId: payload.sub,
      },
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
    delete user.password;
    return user;
  }
}
