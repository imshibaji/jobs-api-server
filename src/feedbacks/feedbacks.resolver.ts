import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackInput } from './dto/update-feedback.dto';

@Resolver()
export class FeedbacksResolver {
    constructor(private readonly feedbacksService: FeedbacksService) {}

    @Query(() => [Feedback])
    findAll() {
        return this.feedbacksService.findAll();
    }

    @Query(() => Feedback, { nullable: true })
    findOne(@Args('id') id: string) {
        return this.feedbacksService.findOne(+id);
    }

    @Query(() => [Feedback])
    searchFeedbacks(@Args('prop') prop: string, @Args('value') value: string) {
        return this.feedbacksService.searchBy(prop, value);
    }

    @Mutation(() => Feedback)
    createFeedback(@Args('createFeedbackDto') createFeedback: CreateFeedbackDto) {
        return this.feedbacksService.create(createFeedback);
    }

    @Mutation(() => Feedback)
    updateFeedback(@Args('id') id: string, @Args('updateFeedbackDto') updateFeedback: UpdateFeedbackInput) {
        return this.feedbacksService.update(+id, updateFeedback);
    }

    @Mutation(() => Feedback)
    removeFeedback(@Args('id') id: string) {
        return this.feedbacksService.remove(+id);
    }
}
