import { Inject, Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfoliosService {

  constructor(
    @Inject('PORTFOLIO_REPOSITORY')
    private readonly portfolioRepository: Repository<Portfolio>,
  ) {}

  create(createPortfolioDto: CreatePortfolioDto) {
    return 'This action adds a new portfolio';
  }

  findAll() {
    return `This action returns all portfolios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portfolio`;
  }

  update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    return `This action updates a #${id} portfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} portfolio`;
  }
}
