/* biome-ignore-all assist/source/organizeImports: Nest DI requires runtime class imports */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  CreateLeetcodeSolveDto,
  UpdateLeetcodeSolveDto,
} from './dto/create-leetcodeSolve.dto';
import { LeetcodeSolveDto } from './dto/leetcode-solve.dto';
import type { LeetcodeSolve } from '@portfolio/db';
import { LeetcodeSolveService } from './leetcodeSolve.service';
import { Public } from '../auth/public.decorator';

@Controller('leetcode-solves')
export class LeetcodeSolveController {
  constructor(private readonly leetcodeSolveService: LeetcodeSolveService) {}

  @Get(':id')
  @ApiNotFoundResponse({ description: 'Leetcode solve not found' })
  @ApiOkResponse({ type: LeetcodeSolveDto })
  @Public()
  async getLeetcodeSolveById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LeetcodeSolve> {
    return this.leetcodeSolveService.leetcodeSolve({ id });
  }

  @Get()
  @ApiOkResponse({ type: [LeetcodeSolveDto] })
  @Public()
  findAll(): Promise<LeetcodeSolve[]> {
    return this.leetcodeSolveService.leetcodeSolves({
      orderBy: { solvedAt: 'desc' },
    });
  }

  @Post()
  @ApiOkResponse({ type: LeetcodeSolveDto })
  create(@Body() data: CreateLeetcodeSolveDto) {
    return this.leetcodeSolveService.createLeetcodeSolve(data);
  }

  @Put(':id')
  @ApiOkResponse({ type: LeetcodeSolveDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateLeetcodeSolveDto,
  ) {
    return this.leetcodeSolveService.updateLeetcodeSolve({
      where: { id },
      data,
    });
  }

  @Delete(':id')
  @ApiOkResponse({ type: LeetcodeSolveDto })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.leetcodeSolveService.deleteLeetcodeSolve({ id });
  }
}
