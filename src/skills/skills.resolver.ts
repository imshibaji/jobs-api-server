import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SkillsService } from './skills.service';
import { Skill } from './skill.entity';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillInput } from './dto/update-skill.dto';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { JobsService } from 'src/jobs/jobs.service';
import { ApplicationsService } from 'src/applications/applications.service';
import { UsersService } from 'src/users/users.service';
import { Applicant } from 'src/applicants/applicant.entity';
import { Application } from 'src/applications/application.entity';
import { Job } from 'src/jobs/job.entity';
import { User } from 'src/users/users.entity';

@Resolver(() => Skill)
export class SkillsResolver {
    constructor(
        private readonly skillService: SkillsService,
        private readonly applicantsService: ApplicantsService,
        private readonly applicationsService: ApplicationsService,
        private readonly jobsService: JobsService,
        private readonly usersService: UsersService
    ) {}

    @Query(() => [Skill])
    async skills() {
        return this.skillService.findAll();
    }

    @Query(() => Skill, { nullable: true })
    async skill(@Args('id') id: number) {
        return this.skillService.findOne(id);
    }

    @ResolveField(() => Applicant, { nullable: true })
    async applicant(@Parent() skill: Skill) {
        if (!skill.applicantId) return null;
        return this.applicantsService.findOne(skill.applicantId);
    }

    @ResolveField(() => Application, { nullable: true })
    async application(@Parent() skill: Skill) {
        if (!skill.applicantId) return false;
        return this.applicationsService.findOne(skill.applicantId);
    }

    @ResolveField(() => Job, { nullable: true })
    async job(@Parent() skill: Skill) {
        if (!skill.applicantId) return false;
        return this.jobsService.findOne(skill.applicantId);
    }

    @ResolveField(() => User, { nullable: true })
    async user(@Parent() skill: Skill) {
        if (!skill.applicantId) return false;
        return this.usersService.findOne(skill.applicantId);
    }

    @Mutation(() => Skill)
    async createSkill(skill: CreateSkillDto) {
        return this.skillService.create(skill);
    }

    @Mutation(() => Skill)
    async updateSkill(@Args('id') id: number, @Args('skill') skill: UpdateSkillInput) {
        await this.skillService.update(id, skill);
        return this.skillService.findOne(id);
    }

    @Mutation(() => Boolean)
    async deleteSkill( @Args('id') id: number) {
        return this.skillService.remove(id);
    }
}
