import { ApiProperty } from '@nestjs/swagger';

export class ReviewCodeforcesQueueDto {
  @ApiProperty()
  durationMin!: number;
}

export class CodeforcesQueueItemDto {
  @ApiProperty()
  id!: number;

  @ApiProperty({ enum: ['CODEFORCES'] })
  platform!: 'CODEFORCES';

  @ApiProperty({ enum: ['PENDING_TIME', 'TIMED', 'SKIPPED'] })
  status!: 'PENDING_TIME' | 'TIMED' | 'SKIPPED';

  @ApiProperty()
  username!: string;

  @ApiProperty()
  submissionId!: number;

  @ApiProperty()
  contestId!: number;

  @ApiProperty()
  problemIndex!: string;

  @ApiProperty()
  problemName!: string;

  @ApiProperty({ required: false, nullable: true, type: Number })
  rating!: number | null;

  @ApiProperty({ type: String, format: 'date-time' })
  solvedAt!: Date;

  @ApiProperty({ required: false, nullable: true, type: Number })
  durationMin!: number | null;

  @ApiProperty({ required: false, nullable: true, type: String, format: 'date-time' })
  reviewedAt!: Date | null;

  @ApiProperty({ type: String, format: 'date-time' })
  createdAt!: Date;
}