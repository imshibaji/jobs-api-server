import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ExperiencesService } from './experiences.service';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceInput } from './dto/update-experience.dto';
import { Applicant } from '../applicants/applicant.entity';
import { ApplicantsService } from '../applicants/applicants.service';

@Resolver(() => Experience)
export class ExperiencesResolver {
  constructor(
    private readonly experiencesService: ExperiencesService,
    private readonly applicantsService: ApplicantsService,
  ) {}

  @Query(() => [Experience])
  async experiences() {
    return await this.experiencesService.findAll();
  }

  @Query(() => Experience, { nullable: true })
  async experience(@Args('id') id: string) {
    return await this.experiencesService.findOne(id);
  }

  @ResolveField(() => Applicant, { nullable: true })
  async applicant(@Parent() experience: Experience) {
    if (!experience.applicantId) return null;
    return await this.applicantsService.findOne(experience.applicantId);
  }

  @Mutation(() => Experience)
  async createExperience(
    @Args('experience') createExperienceInput: CreateExperienceDto,
  ) {
    return await this.experiencesService.create(createExperienceInput);
  }

  @Mutation(() => Experience)
  async updateExperience(
    @Args('id') id: string,
    @Args('experience') updateExperienceInput: UpdateExperienceInput,
  ) {
    await this.experiencesService.update(id, updateExperienceInput);
    return await this.experiencesService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteExperience(id: string) {
    return await this.experiencesService.delete(id);
  }
}
