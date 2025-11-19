import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Skill } from './skill.entity';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillsService {
    constructor(
        @Inject('SKILL_REPOSITORY')
        private skillRepository: Repository<Skill>,
    ) {}

    async findAll(): Promise<Skill[]> {
        return this.skillRepository.find();
    }

    async findOne(id: number): Promise<Skill | null> {
        return this.skillRepository.findOneBy({ id });
    }

    async create(skill: CreateSkillDto): Promise<Skill> {
        return this.skillRepository.save(skill);
    }
    async update(id: number, skill: UpdateSkillDto): Promise<void> {
        await this.skillRepository.update(id, {...skill, updatedAt: new Date() });
    }

    async remove(id: number): Promise<void> {
        await this.skillRepository.delete(id);
    }

}
