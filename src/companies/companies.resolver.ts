import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyInput } from './dto/update-company.dto';

@Resolver()
export class CompaniesResolver {
    constructor(private readonly companiesService: CompaniesService) {}

    @Query(() => [Company])
    async companies() {
        return await this.companiesService.findAll();
    }

    @Query(() => Company)
    async company(@Args('id') id: number) {
        return await this.companiesService.findOne(id) || null;
    }

    @Mutation(() => Company)
    async createCompany(@Args('company') company: CreateCompanyDto) {
        return await this.companiesService.create(company);
    }

    @Mutation(() => Company, { nullable: true })
    async updateCompany(@Args('id') id: number, @Args('company') company: UpdateCompanyInput) {
        return await this.companiesService.update(id, company) || null;
    }

    @Mutation(() => Boolean)
    async deleteCompany( @Args('id') id: number): Promise<boolean> {
        return await this.companiesService.delete(id) ? true : false;
    }
}
