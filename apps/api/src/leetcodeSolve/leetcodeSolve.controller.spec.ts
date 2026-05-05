import { Test, type TestingModule } from '@nestjs/testing';
import { LeetcodeSolveController } from './leetcodeSolve.controller';
import { LeetcodeSolveService } from './leetcodeSolve.service';

describe('LeetcodeSolveController', () => {
  const leetcodeSolveService = {
    createLeetcodeSolve: jest.fn(),
    updateLeetcodeSolve: jest.fn(),
    deleteLeetcodeSolve: jest.fn(),
  };

  let controller: LeetcodeSolveController;

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeetcodeSolveController],
      providers: [
        {
          provide: LeetcodeSolveService,
          useValue: leetcodeSolveService,
        },
      ],
    }).compile();

    controller = module.get(LeetcodeSolveController);
  });

  it('updates a solve by id', async () => {
    leetcodeSolveService.updateLeetcodeSolve.mockResolvedValueOnce({ id: 1 });

    await controller.update(1, {
      language: 'TypeScript',
      solvedWithoutHint: false,
    });

    expect(leetcodeSolveService.updateLeetcodeSolve).toHaveBeenCalledWith({
      where: { id: 1 },
      data: {
        language: 'TypeScript',
        solvedWithoutHint: false,
      },
    });
  });

  it('deletes a solve by id', async () => {
    leetcodeSolveService.deleteLeetcodeSolve.mockResolvedValueOnce({ id: 1 });

    await controller.remove(1);

    expect(leetcodeSolveService.deleteLeetcodeSolve).toHaveBeenCalledWith({
      id: 1,
    });
  });
});
