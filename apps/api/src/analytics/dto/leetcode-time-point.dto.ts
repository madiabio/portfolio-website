export class LeetcodeScatterPointDto {
  x: Date;
  y: number;
  difficulty: 'easy' | 'medium' | 'hard';
  problemNumber: number;
  problemName: string;
}

export class LeetcodeTimeByDifficultyResponseDto {
  points: LeetcodeScatterPointDto[];
  goals: {
    easy: number;
    medium: number;
    hard: number;
  };
}
