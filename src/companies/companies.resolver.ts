import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyInput } from './dto/update-company.dto';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { Job } from '../jobs/job.entity';
import { JobsService } from '../jobs/jobs.service';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly usersService: UsersService,
    private readonly jobsService: JobsService,
  ) {}

  @Query(() => [Company])
  async companies() {
    return await this.companiesService.findAll();
  }

  @Query(() => Company)
  async company(@Args('id') id: number) {
    return (await this.companiesService.findOne(id)) || null;
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() company: Company) {
    if (!company.userId) return null;
    return this.usersService.findOne(company.userId);
  }

  @ResolveField(() => [Job], { nullable: true })
  async jobs(@Parent() company: Company) {
    if (!company.id) return null;
    return this.jobsService.findBy({ companyId: company.id });
  }

  @Mutation(() => Company)
  async createCompany(@Args('company') company: CreateCompanyDto) {
    return await this.companiesService.create(company);
  }

  @Mutation(() => Company, { nullable: true })
  async updateCompany(
    @Args('id') id: number,
    @Args('company') company: UpdateCompanyInput,
  ) {
    return (await this.companiesService.update(id, company)) || null;
  }

  @Mutation(() => Boolean)
  async deleteCompany(@Args('id') id: number): Promise<boolean> {
    return (await this.companiesService.delete(id)) ? true : false;
  }
}
