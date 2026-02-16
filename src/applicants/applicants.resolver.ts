import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantInput } from './dto/update-applicant.dto';
import { Applicant } from './applicant.entity';

@Resolver()
export class ApplicantsResolver {
    constructor(private readonly applicantsService: ApplicantsService) {}

    @Query(() => [Applicant])
    async applicants(): Promise<Applicant[]> {
        return await this.applicantsService.findAll() as unknown as Applicant[];
    }

    @Query(() => Applicant, { nullable: true })
    async applicant(@Args('id') id: number): Promise<Applicant | null> {
        return await this.applicantsService.findOne(id) as unknown as Applicant || null;
    }

    @Mutation(() => Applicant)
    async createApplicant(@Args('createApplicantDto') createApplicantDto: CreateApplicantDto): Promise<Applicant> {
        return await this.applicantsService.create(createApplicantDto) as unknown as Applicant;
    }

    @Mutation(() => Applicant)
    async updateApplicant(@Args('id') id: number, @Args('applicant') applicant: UpdateApplicantInput): Promise<Applicant> {
        return await this.applicantsService.update(id, applicant) as unknown as Applicant;
    }

    @Mutation(() => Boolean)
    async deleteApplicant(@Args('id') id: number): Promise<boolean> {
        return await this.applicantsService.remove(id) ? true : false;
    }
}
