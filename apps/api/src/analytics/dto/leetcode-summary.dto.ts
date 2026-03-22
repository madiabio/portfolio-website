export class DifficultyCountsDto {
  easy: number;
  medium: number;
  hard: number;
}

export class LeetcodeSummaryDto {
  totalSolved: number;
  difficultyCounts: DifficultyCountsDto;
}
