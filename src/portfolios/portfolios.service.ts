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

  async create(createPortfolioDto: CreatePortfolioDto) {
    return await this.portfolioRepository.save(createPortfolioDto);
  }

  async findAll() {
    return await this.portfolioRepository.find();
  }

  async findOne(id: number) {
    return await this.portfolioRepository.findOneBy({ id });
  }

  async update(id: number, updatePortfolioDto: UpdatePortfolioDto) {
    return await this.portfolioRepository.update(id, updatePortfolioDto);
  }

  async remove(id: number) {
    return await this.portfolioRepository.delete(id);
  }
}
