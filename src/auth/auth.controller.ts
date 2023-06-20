import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/create.user.dto';
import { Tokens } from './types';
import { UserData } from './types/userData.type';
import { Request } from 'express';
import { RtGuard } from 'src/common/guards';
import { AtGuard } from 'src/common/guards';
import { LoginUserDTO } from 'src/users/login.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() userData: CreateUserDTO): Promise<Tokens> {
    return this.authService.register(userData);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() userData: LoginUserDTO): Promise<UserData> {
    return this.authService.login(userData);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() req: Request) {
    const user = req.user;
    return this.authService.logout(user['sub']);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(@Req() req: Request) {
    const user = req.user;
    return this.authService.refresh(user['sub'], user['refreshToken']);
  }

}
