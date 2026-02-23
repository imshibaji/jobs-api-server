import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { Applicant } from 'src/applicants/applicant.entity';
import { Job } from 'src/jobs/job.entity';
import { JobsService } from 'src/jobs/jobs.service';
import { CompaniesService } from 'src/companies/companies.service';
import { Company } from 'src/companies/company.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly applicantsService: ApplicantsService,
    private readonly jobsService: JobsService,
    private readonly companiesService: CompaniesService,
  ) {}

  @Query(() => [User])
  async users() {
    return await this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => User, { nullable: true })
  async createUser(@Args('user') user: CreateUserDto) {
    return await this.usersService.create(user);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('user') user: UpdateUserInput,
  ) {
    await this.usersService.update(id, user);
    return await this.usersService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number) {
    return await this.usersService.delete(id);
  }

  // Relationship resolver to fetch applicants for a user

  @ResolveField(() => [Applicant])
  async applicants(@Parent() user: User) {
    // If the user already has applicants loaded, return them
    if (user.applicants) {
      return user.applicants;
    }

    // Otherwise, fetch them from the service
    const data = await this.applicantsService.findOneBy({ userId: user.id });

    // Return the data if found, or an empty array to satisfy GraphQL
    return data || [];
  }

  @ResolveField(() => [Job])
  async jobs(@Parent() user: User) {
    if (user.jobs) {
      return user.jobs;
    }

    const data = await this.jobsService.findOneBy({ userId: user.id });
    return data || [];
  }

  @ResolveField(() => [Company])
  async companies(@Parent() user: User): Promise<Company[]> {
    // 1. Check if already loaded by TypeORM (e.g., via relations)
    if (user.companies && user.companies.length > 0) {
      return user.companies;
    }

    // 2. Use .find() to get an ARRAY, not .findOneBy()
    const data = await this.companiesService.findAllByUserId(user.id!);

    // 3. Always return an array (even if empty) to satisfy GraphQL [Company]
    return data || [];
  }
}
