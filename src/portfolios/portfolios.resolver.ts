import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PortfoliosService } from './portfolios.service';
import { Portfolio } from './entities/portfolio.entity';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioInput } from './dto/update-portfolio.dto';

@Resolver()
export class PortfoliosResolver {
    constructor(private readonly portfoliosService: PortfoliosService) {}

    @Query(() => [Portfolio])
    async portfolios() {
        return this.portfoliosService.findAll();
    }

    @Query(() => Portfolio, { nullable: true })
    async portfolio(@Args('id') id: number) {
        return this.portfoliosService.findOne(id);
    }

    @Mutation(() => Portfolio)
    async createPortfolio(@Args('portfolio') portfolio: CreatePortfolioDto) {
        return this.portfoliosService.create(portfolio);
    }

    @Mutation(() => Portfolio)
    async updatePortfolio(@Args('id') id: number, @Args('portfolio') portfolio: UpdatePortfolioInput) {
        return this.portfoliosService.update(id, portfolio);
    }

    @Mutation(() => Boolean)
    async deletePortfolio( @Args('id') id: number) {
        return this.portfoliosService.remove(id);
    }
}
