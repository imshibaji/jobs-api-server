import { Inject, Injectable } from '@nestjs/common';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { ILike, Repository } from 'typeorm';
import { Portfolio } from './entities/portfolio.entity';

@Injectable()
export class PortfoliosService {
  constructor(
    @Inject('PORTFOLIO_REPOSITORY')
    private readonly portfolioRepository: Repository<Portfolio>,
  ) {}

  async searchBy(prop: string, value): Promise<Portfolio[]>{
    return this.portfolioRepository.findBy({[prop]: ILike(`%${value}%`)});
  }

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
