import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ApplicationsService } from './applications.service';
import { Application } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationInput } from './dto/update-application.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { JobsService } from 'src/jobs/jobs.service';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { Job } from 'src/jobs/job.entity';
import { Applicant } from 'src/applicants/applicant.entity';

@Resolver(() => Application)
export class ApplicationsResolver {
  constructor(
    private readonly applicationsService: ApplicationsService,
    private readonly jobsService: JobsService,
    private readonly applicantsService: ApplicantsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [Application])
  async applications() {
    return this.applicationsService.findAll();
  }

  @Query(() => Application, { nullable: true })
  async application(@Args('id') id: number) {
    return this.applicationsService.findOne(id);
  }

  @ResolveField(() => Job, { nullable: true })
  async job(@Parent() application: Application) {
    if (!application.jobId) return null;
    return this.jobsService.findOne(application.jobId);
  }

  @ResolveField(() => Applicant, { nullable: true })
  async applicant(@Parent() application: Application) {
    if (!application.applicantId) return null;
    return this.applicantsService.findOne(application.applicantId);
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() application: Application) {
    if (!application.userId) return null;
    return this.usersService.findOne(application.userId);
  }

  @Mutation(() => Application)
  async createApplication(
    @Args('application') createApplicationInput: CreateApplicationDto,
  ) {
    return this.applicationsService.create(createApplicationInput);
  }

  @Mutation(() => Application)
  async updateApplication(
    @Args('id') id: number,
    @Args('application') updateApplicationInput: UpdateApplicationInput,
  ) {
    await this.applicationsService.update(id, updateApplicationInput);
    return this.applicationsService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteApplication(id: number) {
    return this.applicationsService.remove(id);
  }
}
