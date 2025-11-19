import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Education } from './education.entity';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';

@Injectable()
export class EducationService {
    constructor(
        @Inject('EDUCATION_REPOSITORY')
        private educationRepository: Repository<Education>,
    ) {}

    async findAll(): Promise<Education[]> {
        return this.educationRepository.find();
    }

    async findOne(id: number): Promise<Education | null> {
        return this.educationRepository.findOneBy({ id });
    }

    async create(education: CreateEducationDto): Promise<Education> {
        const newEducation = this.educationRepository.create(education);
        return this.educationRepository.save(newEducation);
    }

    async update(id: number, education: UpdateEducationDto): Promise<void> {
        await this.educationRepository.update(id, education);
    }

    async remove(id: number): Promise<void> {
        await this.educationRepository.delete(id);
    }
}
