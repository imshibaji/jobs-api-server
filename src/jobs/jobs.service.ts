import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
    constructor(
        @Inject('JOB_REPOSITORY')
        private jobsRepository: Repository<Job>,
    ) {}

    async findAll(): Promise<Job[]> {
        return this.jobsRepository.find();
    }

    async findOne(id: number): Promise<Job | null> {
        return this.jobsRepository.findOne({ where: { id } });
    }

    async create(jobData: CreateJobDto): Promise<Job> {
        const job = this.jobsRepository.create({
            ...jobData,
            isDeleted: false,
        });
        return this.jobsRepository.save(job);
    }

    async update(id: number, jobData: UpdateJobDto): Promise<Job | null> {
        await this.jobsRepository.update(id, jobData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.jobsRepository.delete(id);
    }
}
