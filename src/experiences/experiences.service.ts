import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Experience } from './experience.entity';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperiencesService {
    constructor(
        @Inject('EXPERIENCE_REPOSITORY')
        private experiencesRepository: Repository<Experience>,
    ) {}

    // Service methods go here
    async findAll(): Promise<Experience[]> {
        return this.experiencesRepository.find();
    }

    async findOne(id: string): Promise<Experience | null> {
        return this.experiencesRepository.findOneBy({ id });
    }

    async create(experience: CreateExperienceDto): Promise<Experience> {
        return this.experiencesRepository.save(experience);
    }
    
    async update(id: string, experience: UpdateExperienceDto): Promise<void> {
        await this.experiencesRepository.update(id, experience);
    }

    async delete(id: string): Promise<void> {
        await this.experiencesRepository.delete(id);
    }
}
