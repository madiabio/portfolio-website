import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";

export class CreateLeetcodeSolveDto {
  @ApiProperty()
  problemNumber: number;

  @ApiProperty()
  problemName: string;

  @ApiProperty({ type: String, format: "date-time" })
  solvedAt: Date;

  @ApiProperty({ enum: ["easy", "medium", "hard"] })
  difficulty: "easy" | "medium" | "hard";

  @ApiPropertyOptional({ nullable: true, type: String })
  language?: string | null;

  @ApiProperty()
  durationMin: number;

  @ApiPropertyOptional({ nullable: true, type: String })
  notes?: string | null;

  @ApiPropertyOptional({ nullable: true, type: Boolean })
  solvedWithoutHint?: boolean | null;

  @ApiPropertyOptional({ nullable: true, type: Boolean })
  solvedOptimally?: boolean | null;
}

export class UpdateLeetcodeSolveDto extends PartialType(
  CreateLeetcodeSolveDto,
) {}
