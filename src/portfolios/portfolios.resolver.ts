import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PortfoliosService } from './portfolios.service';
import { Portfolio } from './entities/portfolio.entity';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioInput } from './dto/update-portfolio.dto';
import { UsersService } from 'src/users/users.service';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { Applicant } from 'src/applicants/applicant.entity';

@Resolver(() => Portfolio)
export class PortfoliosResolver {
  constructor(
    private readonly portfoliosService: PortfoliosService,
    private readonly usersService: UsersService,
    private readonly applicantsService: ApplicantsService,
  ) {}

  @Query(() => [Portfolio])
  async portfolios() {
    return this.portfoliosService.findAll();
  }

  @Query(() => Portfolio, { nullable: true })
  async portfolio(@Args('id') id: number) {
    return this.portfoliosService.findOne(id);
  }

  @ResolveField(() => Applicant, { nullable: true })
  async applicant(@Parent() portfolio: Portfolio) {
    return this.applicantsService.findOne(portfolio.applicantId!);
  }

  @ResolveField(() => Portfolio, { nullable: true })
  async user(@Parent() portfolio: Portfolio) {
    return this.usersService.findOne(portfolio.userId!);
  }

  @Mutation(() => Portfolio)
  async createPortfolio(@Args('portfolio') portfolio: CreatePortfolioDto) {
    return this.portfoliosService.create(portfolio);
  }

  @Mutation(() => Portfolio)
  async updatePortfolio(
    @Args('id') id: number,
    @Args('portfolio') portfolio: UpdatePortfolioInput,
  ) {
    return this.portfoliosService.update(id, portfolio);
  }

  @Mutation(() => Boolean)
  async deletePortfolio(@Args('id') id: number) {
    return this.portfoliosService.remove(id);
  }
}
