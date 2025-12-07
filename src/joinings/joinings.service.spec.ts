import { Test, TestingModule } from '@nestjs/testing';
import { JoiningsService } from './joinings.service';

describe('JoiningsService', () => {
  let service: JoiningsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoiningsService],
    }).compile();

    service = module.get<JoiningsService>(JoiningsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
