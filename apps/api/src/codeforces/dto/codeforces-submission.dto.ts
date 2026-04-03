import { ApiProperty } from '@nestjs/swagger';

export class CodeforcesProblemDto {
  @ApiProperty({ required: false })
  contestId?: number;

  @ApiProperty()
  index!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty({ required: false })
  rating?: number;
}

export class CodeforcesSubmissionDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  creationTimeSeconds!: number;

  @ApiProperty()
  relativeTimeSeconds!: number;

  @ApiProperty({ type: () => CodeforcesProblemDto })
  problem!: CodeforcesProblemDto;

  @ApiProperty({ required: false })
  verdict?: string;
}

export class CodeforcesSyncResponseDto {
  @ApiProperty()
  created!: number;
}