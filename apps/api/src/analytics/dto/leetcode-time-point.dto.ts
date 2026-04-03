import { ApiProperty } from '@nestjs/swagger';

export class LeetcodeScatterPointDto {
  @ApiProperty({ type: String, format: 'date-time' })
  x: Date;

  @ApiProperty()
  y: number;

  @ApiProperty({ enum: ['easy', 'medium', 'hard'] })
  difficulty: 'easy' | 'medium' | 'hard';

  @ApiProperty()
  problemNumber: number;

  @ApiProperty()
  problemName: string;
}

export class LeetcodeTimeByDifficultyResponseDto {
  @ApiProperty({ type: () => [LeetcodeScatterPointDto] })
  points: LeetcodeScatterPointDto[];

  @ApiProperty({
    type: 'object',
    properties: {
      easy: { type: 'number' },
      medium: { type: 'number' },
      hard: { type: 'number' },
    },
  })
  goals: {
    easy: number;
    medium: number;
    hard: number;
  };
}

export class CodeforcesScatterPointDto {
  @ApiProperty({ type: String, format: 'date-time' })
  x: Date;

  @ApiProperty()
  y: number;

  @ApiProperty({ enum: ['0-1200', '1200-1600', '1600-2000', '2000+'] })
  ratingTier: '0-1200' | '1200-1600' | '1600-2000' | '2000+';

  @ApiProperty({ required: false, nullable: true, type: Number })
  rating: number | null;

  @ApiProperty()
  contestId: number;

  @ApiProperty()
  problemIndex: string;

  @ApiProperty()
  problemName: string;
}

export class CodeforcesTimeByRatingResponseDto {
  @ApiProperty({ type: () => [CodeforcesScatterPointDto] })
  points: CodeforcesScatterPointDto[];

  @ApiProperty({
    type: 'object',
    properties: {
      '0-1200': { type: 'number' },
      '1200-1600': { type: 'number' },
      '1600-2000': { type: 'number' },
      '2000+': { type: 'number' },
    },
  })
  goals: {
    '0-1200': number;
    '1200-1600': number;
    '1600-2000': number;
    '2000+': number;
  };
}
