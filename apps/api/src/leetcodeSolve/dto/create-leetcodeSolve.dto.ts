import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class CreateLeetcodeSolveDto {
  @ApiProperty()
  problemNumber: number;

  @ApiProperty()
  problemName: string;

  @ApiProperty({ type: String, format: 'date-time' })
  solvedAt: Date;

  @ApiProperty({ enum: ['easy', 'medium', 'hard'] })
  difficulty: 'easy' | 'medium' | 'hard';

  @ApiPropertyOptional({ nullable: true })
  language?: string | null;

  @ApiProperty()
  durationMin: number;

  @ApiPropertyOptional({ nullable: true })
  notes?: string | null;

  @ApiPropertyOptional({ nullable: true })
  solvedWithoutHint?: boolean | null;

  @ApiPropertyOptional({ nullable: true })
  solvedOptimally?: boolean | null;
}

export class UpdateLeetcodeSolveDto extends PartialType(CreateLeetcodeSolveDto) {}
