import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { Query } from '@nestjs/graphql';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobInput } from './dto/update-job.dto';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { Company } from '../companies/company.entity';
import { CompaniesService } from '../companies/companies.service';
import { ApplicationsService } from '../applications/applications.service';
import { Application } from '../applications/application.entity';

@Resolver(() => Job)
export class JobsResolver {
  constructor(
    private readonly jobsService: JobsService,
    private readonly usersService: UsersService,
    private readonly companiesService: CompaniesService,
    private readonly applicationsService: ApplicationsService,
  ) {}

  @Query(() => [Job])
  async jobs(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Query(() => Job, { nullable: true })
  async job(@Args('id') id: number): Promise<Job | null> {
    return this.jobsService.findOne(id) || null;
  }

  @Query(() => [Job])
  async searchJobs(
    @Args('prop') prop: string,
    @Args('value') value: string,
  ): Promise<Job[]> {
    return this.jobsService.searchBy(prop, value);
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() job: Job) {
    try {
      if (!job.userId) return null;
      const user = (await this.usersService.findOne(job.userId!)) || null;
      return user || null; // 👈 If user doesn't exist in DB, returns null
    } catch (error) {
      return null; // 👈 Ensures the whole query doesn't crash if one user is missing
    }
  }

  @ResolveField(() => Company, { nullable: true })
  async company(@Parent() job: Job) {
    try {
      if (!job.companyId) return null;
      const company =
        (await this.companiesService.findOne(job.companyId!)) || null;
      return company || null; // 👈 If user doesn't exist in DB, returns null
    } catch (error) {
      return null; // 👈 Ensures the whole query doesn't crash if one user is missing
    }
  }

  @ResolveField(() => [Application])
  async applications(@Parent() job: Job) {
    try {
      if (!job.id) return [];
      const applications =
        (await this.applicationsService.findBy({ jobId: job.id })) || [];
      return applications || [];
    } catch (error) {
      return []; // 👈 Ensures the whole query doesn't crash if one application is missing
    }
  }

  @Mutation(() => Job)
  async createJob(@Args('job') job: CreateJobDto): Promise<Job> {
    return this.jobsService.create(job);
  }

  @Mutation(() => Job, { nullable: true })
  async updateJob(
    @Args('id') id: number,
    @Args('job') job: UpdateJobInput,
  ): Promise<Job | null> {
    await this.jobsService.update(id, job);
    return this.jobsService.findOne(id) || null;
  }

  @Mutation(() => Boolean)
  async deleteJob(@Args('id') id: number): Promise<boolean> {
    return (await this.jobsService.remove(id)) ? true : false;
  }
}
