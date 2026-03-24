import { Controller, Get, Req } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import type { Request } from 'express';
import { Public } from './public.decorator';
import { AdminAuthService } from './admin-auth.service';
import { IsAdminResponseDto } from './dto/is-admin-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Get('is-admin')
  @Public()
  @ApiOkResponse({ type: IsAdminResponseDto })
  async isAdmin(@Req() req: Request): Promise<IsAdminResponseDto> {
    return {
      isAdmin: await this.adminAuthService.isAdmin(req),
    };
  }
}
