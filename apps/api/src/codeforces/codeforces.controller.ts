import { Body, Controller, Get, Param, Patch, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CodeforcesService } from './codeforces.service';
import { Public } from '../auth/public.decorator';
import {
  CodeforcesQueueItemDto,
  ReviewCodeforcesQueueDto,
} from './dto/codeforces-queue.dto';
import {
  CodeforcesSyncResponseDto,
  CodeforcesSubmissionDto,
} from './dto/codeforces-submission.dto';

@Controller('codeforces')
export class CodeforcesController {
  constructor(private readonly codeforcesService: CodeforcesService) {}

  @Get('sync')
  @ApiOkResponse({ type: CodeforcesSyncResponseDto })
  async sync(@Query('handle') handle?: string) {
    const username = handle ?? process.env.CODEFORCES_USERNAME ?? 'madelineabio';

    return this.codeforcesService.syncUserSubmissions(username);
  }

  @Get('submissions')
  @Public()
  @ApiOkResponse({ type: CodeforcesSubmissionDto, isArray: true })
  async submissions(@Query('handle') handle?: string) {
    const username = handle ?? process.env.CODEFORCES_USERNAME ?? 'madelineabio';

    return this.codeforcesService.fetchAcceptedUserSubmissions(username);
  }

  @Get('submissions/all')
  @Public()
  @ApiOkResponse({ type: CodeforcesSubmissionDto, isArray: true })
  async allSubmissions(@Query('handle') handle?: string) {
    const username = handle ?? process.env.CODEFORCES_USERNAME ?? 'madelineabio';

    return this.codeforcesService.fetchAllUserSubmissions(username);
  }

  @Get('queue')
  @ApiOkResponse({ type: CodeforcesQueueItemDto, isArray: true })
  async queue(@Query('handle') handle?: string): Promise<CodeforcesQueueItemDto[]> {
    const username = handle ?? process.env.CODEFORCES_USERNAME ?? 'madelineabio';

    return this.codeforcesService.getPendingQueuedUserSubmissions(username);
  }

  @Patch('queue/:id')
  @ApiOkResponse({ type: CodeforcesQueueItemDto })
  async reviewQueueItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ReviewCodeforcesQueueDto,
  ): Promise<CodeforcesQueueItemDto> {
    return this.codeforcesService.reviewQueuedSubmission({
      id,
      durationMin: body.durationMin,
    });
  }
}