import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InterviewsService } from './interviews.service';
import { Interview } from './entities/interview.entity';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { UpdateInterviewInput } from './dto/update-interview.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';
import { ApplicationsService } from 'src/applications/applications.service';
import { Application } from 'src/applications/application.entity';

@Resolver(() => Interview)
export class InterviewsResolver {
    constructor(
        private readonly interviewsService: InterviewsService,
        private readonly usersService: UsersService,
        private readonly applicationsService: ApplicationsService
    ) {}

    @Query(() => [Interview])
    async interviews() {
        return this.interviewsService.findAll();
    }

    @Query(() => Interview)
    async interview(@Args('id') id: number) {
        return this.interviewsService.findOne(id);
    }

    @ResolveField(() => Application)
    async application(@Parent() interview: Interview) {
        return this.applicationsService.findOne(interview.applicationId);
    }

    @ResolveField(() => User)
    async user(@Parent() interview: Interview) {
        return this.usersService.findOne(interview.userId);
    }

    @Mutation(() => Interview)
    async createInterview(@Args('interview') interview: CreateInterviewDto) {
        return this.interviewsService.create(interview);
    }

    @Mutation(() => Interview)
    async updateInterview(@Args('id') id: number, @Args('interview') interview: UpdateInterviewInput) {
        return this.interviewsService.update(id, interview);
    }

    @Mutation(() => Boolean)
    async deleteInterview(@Args('id') id: number) {
        return this.interviewsService.remove(id);
    }
}
