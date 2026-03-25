// auth.controller.ts
import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { Public } from './public.decorator';
import { AdminAuthService } from './admin-auth.service';
import { IsAdminResponseDto } from './dto/is-admin-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Get('is-admin')
  @Public()
  @ApiOkResponse({ type: IsAdminResponseDto })
  async isAdmin(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response<IsAdminResponseDto>> {
    res.setHeader('Cache-Control', 'no-store, private, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Vary', 'Cookie, Origin');

    const isAdmin = await this.adminAuthService.isAdmin(req);

    return res.json({ isAdmin });
  }
}
