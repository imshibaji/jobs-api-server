import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantInput } from './dto/update-applicant.dto';
import { Applicant } from './applicant.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.entity';

@Resolver(() => Applicant)
export class ApplicantsResolver {
  constructor(
    private readonly applicantsService: ApplicantsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [Applicant])
  async applicants(): Promise<Applicant[]> {
    return (await this.applicantsService.findAll()) as Applicant[];
  }

  @Query(() => Applicant, { nullable: true })
  async applicant(@Args('id') id: number): Promise<Applicant | null> {
    return ((await this.applicantsService.findOne(id)) as Applicant) || null;
  }

  @Query(() => [Applicant])
  async searchApplicants(@Args('prop') prop: string, @Args('value') value: string): Promise<Applicant[]> {
    return (await this.applicantsService.searchBy(prop, value)) as Applicant[];
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() applicant: Applicant) {
    if (!applicant.userId) return null;
    return this.usersService.findOne(applicant.userId);
  }

  @Mutation(() => Applicant)
  async createApplicant(
    @Args('applicant') createApplicant: CreateApplicantDto,
  ): Promise<Applicant> {
    return (await this.applicantsService.create(createApplicant)) as Applicant;
  }

  @Mutation(() => Applicant, { nullable: true })
  async updateApplicant(
    @Args('id') id: number,
    @Args('applicant') updateApplicant: UpdateApplicantInput,
  ): Promise<Applicant | null> {
    // 1. Perform the update
    await this.applicantsService.update(id, updateApplicant);

    // 2. Fetch and return the fresh data
    return await this.applicantsService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteApplicant(@Args('id') id: number): Promise<boolean> {
    return (await this.applicantsService.remove(id)) ? true : false;
  }
}
