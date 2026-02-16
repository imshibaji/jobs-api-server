import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InterviewsService } from './interviews.service';
import { Interview } from './entities/interview.entity';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { UpdateInterviewInput } from './dto/update-interview.dto';

@Resolver()
export class InterviewsResolver {
    constructor(private readonly interviewsService: InterviewsService) {}

    @Query(() => [Interview])
    async interviews() {
        return this.interviewsService.findAll();
    }

    @Query(() => Interview)
    async interview(@Args('id') id: number) {
        return this.interviewsService.findOne(id);
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
