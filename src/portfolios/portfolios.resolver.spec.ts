import { Test, TestingModule } from '@nestjs/testing';
import { PortfoliosResolver } from './portfolios.resolver';

describe('PortfoliosResolver', () => {
  let resolver: PortfoliosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortfoliosResolver],
    }).compile();

    resolver = module.get<PortfoliosResolver>(PortfoliosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
