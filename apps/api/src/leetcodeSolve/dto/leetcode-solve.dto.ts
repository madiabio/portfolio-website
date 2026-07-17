import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class LeetcodeSolveDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: ["LEETCODE", "CODEFORCES", "HACKERRANK"] })
  platform: "LEETCODE" | "CODEFORCES" | "HACKERRANK";

  @ApiProperty()
  problemNumber: number;

  @ApiProperty()
  problemName: string;

  @ApiProperty({ enum: ["easy", "medium", "hard"] })
  difficulty: string;

  @ApiPropertyOptional({ nullable: true, type: String })
  language?: string | null;

  @ApiProperty()
  durationMin: number;

  @ApiProperty({ type: String, format: "date-time" })
  solvedAt: Date;

  @ApiPropertyOptional({ nullable: true, type: String })
  notes?: string | null;

  @ApiPropertyOptional({ nullable: true, type: Boolean })
  solvedWithoutHint?: boolean | null;

  @ApiPropertyOptional({ nullable: true, type: Boolean })
  solvedOptimally?: boolean | null;

  @ApiProperty({ type: String, format: "date-time" })
  createdAt: Date;
}
