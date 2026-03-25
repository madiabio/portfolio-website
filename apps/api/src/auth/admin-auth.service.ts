import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { fromNodeHeaders } from 'better-auth/node';
import { auth } from '@portfolio/auth';

@Injectable()
export class AdminAuthService {
  private getAdminEmail(): string {
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!adminEmail) {
      throw new Error('ADMIN_EMAIL is not set.');
    }

    return adminEmail;
  }

  async getSession(req: Request) {
    console.log('cookie header:', req.headers.cookie);
    console.log('origin header:', req.headers.origin);
    console.log('host header:', req.headers.host);

    try {
      const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
      });

      console.log('session result:', session);
      return session;
    } catch (error) {
      console.error('getSession failed:', error);
      throw error;
    }
  }

  async isAdmin(req: Request): Promise<boolean> {
    const session = await this.getSession(req);

    const sessionEmail = session?.user?.email?.trim().toLowerCase();
    const adminEmail = this.getAdminEmail();

    console.log('sessionEmail:', sessionEmail);
    console.log('adminEmail:', adminEmail);
    console.log('equal:', sessionEmail === adminEmail);

    return !!sessionEmail && sessionEmail === adminEmail;
  }

  async assertAdmin(req: Request) {
    const session = await this.getSession(req);

    if (!session?.user) {
      throw new UnauthorizedException('Not signed in');
    }

    const sessionEmail = session.user.email?.trim().toLowerCase();
    const adminEmail = this.getAdminEmail();

    if (!sessionEmail || sessionEmail !== adminEmail) {
      throw new ForbiddenException('Not allowed');
    }

    return session;
  }
}
