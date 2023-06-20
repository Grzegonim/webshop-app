import { AuthGuard } from '@nestjs/passport/dist';

export class AtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
