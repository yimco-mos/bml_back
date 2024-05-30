import { Test, TestingModule } from '@nestjs/testing';
import { DeliversRepository } from './delivers.repository';

describe('DeliversRepository', () => {
  let provider: DeliversRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliversRepository],
    }).compile();

    provider = module.get<DeliversRepository>(DeliversRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
