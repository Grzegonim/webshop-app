import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs'; 
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt/dist';
import { UserData } from './types/userData.type';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
    ) {}

  async getTokens(userId: string, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync({
        sub: userId,
        email,
      }, {
        secret: 'at-secret',
        expiresIn: 60 * 15, 
      }),
      this.jwtService.signAsync({
        sub: userId,
        email,
      }, {
        secret: 'rt-secret',
        expiresIn: 60 * 60 * 24 * 7,
      })
    ])

    return {
      access_token: at,
      refresh_token: rt,
    };
  }  

  async updateRtHash(userId: string, rt: string) {
    const hash = await bcrypt.hash(rt, 10);
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    })

  }

  public async register(userData: Omit<User, 'id'>): Promise<Tokens>  {
    try {
      const { password, ...otherData } = userData;
      const pass = await bcrypt.hash(password, 10);
      const user = await this.prismaService.user.create({
        data: {
          ...otherData,
          password: pass
        }
      })  

      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRtHash(user.id, tokens.refresh_token);
      return tokens;
    }
    catch (err) {
      throw err;
    }
  }

  public async login(userData: Omit<User, 'phone'| 'name' | 'address' | 'login' | 'id'>): Promise<UserData> {
    const { password, email } = userData;
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      }
    })

    if(!user) {
      throw new UnauthorizedException("Wrong data");
    } else {
      const checkPassword = await bcrypt.compare(password, user.password);

      if(!checkPassword) {
        throw new UnauthorizedException("Wrong data");
      } else {
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRtHash(user.id, tokens.refresh_token);
        const { name, email, address, phone, id } = user;
        const userData = { ...tokens, name, email, address, phone, id }
        return userData;
      }
    }
  }
  
  async logout(userId: string) {
    await this.prismaService.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    })
  }

  async refresh(userId: string, rt: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      }
    });

    if (!user || !user.hashedRt) {
      throw new UnauthorizedException("Wrong data");
    } else {
      const checkRt = await bcrypt.compare(rt, user.hashedRt);

      if(!checkRt) {
        throw new UnauthorizedException("Wrong data");
      } else {
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRtHash(user.id, tokens.refresh_token);
        return tokens
      }
    }
  }
}
