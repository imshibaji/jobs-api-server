import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SkillsService } from './skills.service';
import { Skill } from './skill.entity';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillInput } from './dto/update-skill.dto';

@Resolver()
export class SkillsResolver {
    constructor(private readonly skillService: SkillsService) {}

    @Query(() => [Skill])
    async skills() {
        return this.skillService.findAll();
    }

    @Query(() => Skill, { nullable: true })
    async skill(@Args('id') id: number) {
        return this.skillService.findOne(id);
    }

    @Mutation(() => Skill)
    async createSkill(skill: CreateSkillDto) {
        return this.skillService.create(skill);
    }

    @Mutation(() => Skill)
    async updateSkill(@Args('id') id: number, @Args('skill') skill: UpdateSkillInput) {
        return this.skillService.update(id, skill);
    }

    @Mutation(() => Boolean)
    async deleteSkill( @Args('id') id: number) {
        return this.skillService.remove(id);
    }
}
