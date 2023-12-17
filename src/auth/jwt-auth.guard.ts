// jwt-auth.guard.ts
import { Injectable, ExecutionContext } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { AuthGuard } from '@nestjs/passport';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log('Before Guard - Request User:', request.user);
    return super.canActivate(context);
  }
}
