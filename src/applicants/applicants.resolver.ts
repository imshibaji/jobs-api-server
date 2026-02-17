import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantInput } from './dto/update-applicant.dto';
import { Applicant } from './applicant.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';

@Resolver(() => Applicant)
export class ApplicantsResolver {
    constructor(
        private readonly applicantsService: ApplicantsService, 
        private readonly usersService: UsersService
    ) {}

    @Query(() => [Applicant])
    async applicants(): Promise<Applicant[]> {
        return await this.applicantsService.findAll() as Applicant[];
    }

    @Query(() => Applicant, { nullable: true })
    async applicant(@Args('id') id: number): Promise<Applicant | null> {
        return await this.applicantsService.findOne(id) as Applicant || null;
    }

    @ResolveField(() => User, { nullable: true })
    async user(@Parent() applicant: Applicant) {
        return this.usersService.findOne(applicant.userId);
    }

    @Mutation(() => Applicant)
    async createApplicant(@Args('createApplicant') createApplicant: CreateApplicantDto): Promise<Applicant> {
        return await this.applicantsService.create(createApplicant) as Applicant;
    }

    @Mutation(() => Applicant)
    async updateApplicant(@Args('id') id: number, @Args('updateApplicant') updateApplicant: UpdateApplicantInput): Promise<Applicant> {
        return await this.applicantsService.update(id, updateApplicant) as unknown as Applicant;
    }

    @Mutation(() => Boolean)
    async deleteApplicant(@Args('id') id: number): Promise<boolean> {
        return await this.applicantsService.remove(id) ? true : false;
    }
}
