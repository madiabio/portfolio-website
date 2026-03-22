export class CreateLeetcodeSolveDto {
  id: number;
  problemNumber: number;
  problemName: string;
  solvedAt: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  durationMin: number;
}
