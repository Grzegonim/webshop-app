import { AuthGuard } from '@nestjs/passport/dist';

export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }
}