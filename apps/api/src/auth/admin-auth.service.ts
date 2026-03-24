import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '@portfolio/auth';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (!ADMIN_EMAIL) {
  throw new Error('ADMIN_EMAIL is not set.');
}

@Injectable()
export class AdminAuthService {
  async getSession(req: Request) {
    return auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
  }

  async isAdmin(req: Request): Promise<boolean> {
    const session = await this.getSession(req);
    return session?.user?.email === ADMIN_EMAIL;
  }

  async assertAdmin(req: Request) {
    const session = await this.getSession(req);

    if (!session?.user) {
      throw new UnauthorizedException('Not signed in');
    }

    if (session.user.email !== ADMIN_EMAIL) {
      throw new ForbiddenException('Not allowed');
    }

    return session;
  }
}
