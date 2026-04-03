import { ApiProperty } from '@nestjs/swagger';

export class DifficultyCountsDto {
  @ApiProperty()
  easy: number;

  @ApiProperty()
  medium: number;

  @ApiProperty()
  hard: number;
}

export class LeetcodeSummaryDto {
  @ApiProperty()
  totalSolved: number;

  @ApiProperty({ type: () => DifficultyCountsDto })
  difficultyCounts: DifficultyCountsDto;
}
