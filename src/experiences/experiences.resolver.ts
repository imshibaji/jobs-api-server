import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExperiencesService } from './experiences.service';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceInput } from './dto/update-experience.dto';

@Resolver()
export class ExperiencesResolver {
    constructor(private readonly experiencesService: ExperiencesService) {}

    @Query(() => [Experience])
    async experiences() {
        return this.experiencesService.findAll();
    }

    @Query(() => Experience, { nullable: true })
    async experience(@Args('id') id: string) {
        return this.experiencesService.findOne(id);
    }

    @Mutation(() => Experience)
    async createExperience(@Args('experience') createExperienceInput: CreateExperienceDto) {
        return this.experiencesService.create(createExperienceInput);
    }

    @Mutation(() => Experience)
    async updateExperience(@Args('id') id: string, @Args('experience') updateExperienceInput: UpdateExperienceInput) {
        return this.experiencesService.update(id, updateExperienceInput);
    }

    @Mutation(() => Boolean)
    async deleteExperience(id: string) {
        return this.experiencesService.delete(id);
    }
}
