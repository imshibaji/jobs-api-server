import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { Education } from './education.entity';
import { UpdateEducationInput } from './dto/update-education.dto';
import { ApplicantsService } from '../applicants/applicants.service';
import { Applicant } from '../applicants/applicant.entity';

@Resolver(() => Education)
export class EducationResolver {
  constructor(
    private readonly educationService: EducationService,
    private readonly applicantsService: ApplicantsService,
  ) {}

  @Query(() => [Education])
  async educations() {
    return this.educationService.findAll();
  }

  @Query(() => Education, { nullable: true })
  async education(id: number) {
    return this.educationService.findOne(id);
  }

  @Query(() => [Education])
  async searchEducations(@Args('prop') prop: string, @Args('value') value: string) {
    return this.educationService.searchBy(prop, value);
  }

  @ResolveField(() => Applicant, { nullable: true })
  async applicant(@Parent() education: Education) {
    if (!education.applicantId) return null;
    return this.applicantsService.findOne(education.applicantId);
  }

  @Mutation(() => Education)
  async createEducation(@Args('education') education: CreateEducationDto) {
    return this.educationService.create(education);
  }

  @Mutation(() => Education)
  async updateEducation(
    @Args('id') id: number,
    @Args('education') education: UpdateEducationInput,
  ) {
    return this.educationService.update(id, education);
  }

  @Mutation(() => Boolean)
  async deleteEducation(@Args('id') id: number) {
    return this.educationService.remove(id);
  }
}
