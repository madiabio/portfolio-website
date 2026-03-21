/* biome-ignore-all assist/source/organizeImports: Nest DI requires runtime class imports */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { CreateLeetcodeSolveDto } from './dto/create-leetcodeSolve.dto';
import { LeetcodeSolve } from '@portfolio/db';
import { LeetcodeSolveService } from './leetcodeSolve.service';

@Controller('leetcode-solves')
export class LeetcodeSolveController {
  constructor(private readonly leetcodeSolveService: LeetcodeSolveService) {}

  @Get(':id')
  @ApiNotFoundResponse({ description: 'Leetcode solve not found' })
  async getLeetcodeSolveById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LeetcodeSolve> {
    return this.leetcodeSolveService.leetcodeSolve({ id });
  }

  @Post()
  create(@Body() data: CreateLeetcodeSolveDto) {
    return this.leetcodeSolveService.createLeetcodeSolve(data);
  }
}
