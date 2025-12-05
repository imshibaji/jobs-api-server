import { Test, TestingModule } from '@nestjs/testing';
import { JoiningsController } from './joinings.controller';
import { JoiningsService } from './joinings.service';

describe('JoiningsController', () => {
  let controller: JoiningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoiningsController],
      providers: [JoiningsService],
    }).compile();

    controller = module.get<JoiningsController>(JoiningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
