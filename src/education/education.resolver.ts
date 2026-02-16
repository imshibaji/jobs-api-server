import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { Education } from './education.entity';
import { UpdateEducationInput } from './dto/update-education.dto';

@Resolver()
export class EducationResolver {
    constructor(private readonly educationService: EducationService) {}

    @Query(() => [Education])
    async educations() {
        return this.educationService.findAll();
    }

    @Query(() => Education, { nullable: true })
    async education(id: number) {
        return this.educationService.findOne(id);
    }

    @Mutation(() => Education)
    async createEducation(@Args('education') education: CreateEducationDto) {
        return this.educationService.create(education);
    }

    @Mutation(() => Education)
    async updateEducation(@Args('id') id: number, @Args('education') education: UpdateEducationInput) {
        return this.educationService.update(id, education);
    }

    @Mutation(() => Boolean)
    async deleteEducation(@Args('id') id: number) {
        return this.educationService.remove(id);
    }
}
