import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { Query } from '@nestjs/graphql';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobInput } from './dto/update-job.dto';

@Resolver()
export class JobsResolver {
    constructor(private readonly jobsService: JobsService) {}

    @Query(() => [Job])
    async jobs(): Promise<Job[]> {
        return this.jobsService.findAll();
    }

    @Query(() => Job, { nullable: true })
    async job(@Args('id') id: number): Promise<Job | null> {
        return this.jobsService.findOne(id) || null;
    }

    @Mutation(() => Job)
    async createJob(@Args('job') job: CreateJobDto): Promise<Job> {
        return this.jobsService.create(job);
    }

    @Mutation(() => Job, { nullable: true })
    async updateJob(@Args('id') id: number, @Args('job') job: UpdateJobInput): Promise<Job | null> {
        return await this.jobsService.update(id, job) || null;
    }

    @Mutation(() => Boolean)
    async deleteJob(@Args('id') id: number): Promise<boolean> {
        return await this.jobsService.remove(id) ? true : false;
    }
}
