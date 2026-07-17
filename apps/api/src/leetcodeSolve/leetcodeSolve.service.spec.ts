import { Test, type TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { LeetcodeSolveService } from './leetcodeSolve.service';

describe('LeetcodeSolveService', () => {
  const prisma = {
    client: {
      leetcodeSolve: {
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    },
  };

  let service: LeetcodeSolveService;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeetcodeSolveService,
        {
          provide: PrismaService,
          useValue: prisma,
        },
      ],
    }).compile();

    service = module.get(LeetcodeSolveService);
  });

  it('persists create metadata fields', async () => {
    prisma.client.leetcodeSolve.create.mockResolvedValueOnce({ id: 1 });

    await service.createLeetcodeSolve({
      problemNumber: 217,
      problemName: 'Contains Duplicate',
      difficulty: 'easy',
      language: 'TypeScript',
      durationMin: 12,
      solvedAt: new Date('2026-05-05T00:00:00.000Z'),
      notes: 'Used a Set.',
      solvedWithoutHint: true,
      solvedOptimally: true,
    });

    expect(prisma.client.leetcodeSolve.create).toHaveBeenCalledWith({
      data: {
        problemNumber: 217,
        problemName: 'Contains Duplicate',
        difficulty: 'easy',
        language: 'TypeScript',
        durationMin: 12,
        solvedAt: new Date('2026-05-05T00:00:00.000Z'),
        notes: 'Used a Set.',
        solvedWithoutHint: true,
        solvedOptimally: true,
      },
    });
  });

  it('updates metadata fields', async () => {
    prisma.client.leetcodeSolve.update.mockResolvedValueOnce({ id: 1 });

    await service.updateLeetcodeSolve({
      where: { id: 1 },
      data: {
        language: 'Python',
        notes: 'Looked at editorial after solving.',
        solvedWithoutHint: false,
        solvedOptimally: false,
      },
    });

    expect(prisma.client.leetcodeSolve.update).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        language: 'Python',
        notes: 'Looked at editorial after solving.',
        solvedWithoutHint: false,
        solvedOptimally: false,
      },
    });
  });

  it('deletes a solve by unique input', async () => {
    prisma.client.leetcodeSolve.delete.mockResolvedValueOnce({ id: 1 });

    await service.deleteLeetcodeSolve({ id: 1 });

    expect(prisma.client.leetcodeSolve.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });
});
