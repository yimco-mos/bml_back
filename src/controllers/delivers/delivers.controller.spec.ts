import { Test, TestingModule } from '@nestjs/testing';
import { DeliversController } from './delivers.controller';

describe('DeliversController', () => {
  let controller: DeliversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliversController],
    }).compile();

    controller = module.get<DeliversController>(DeliversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
