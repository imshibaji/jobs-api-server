import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {
    constructor(
        @Inject('APPLICATION_REPOSITORY')
        private readonly applicationRepository: Repository<Application>,
    ) {}

    async findAll(): Promise<Application[]> {
        return this.applicationRepository.find();
    }

    async findOne(id: number): Promise<Application | null> {
        return this.applicationRepository.findOneBy({ id });
    }

    async create(application: CreateApplicationDto): Promise<Application> {
        return this.applicationRepository.save(application);
    }
    async update(id: number, application:UpdateApplicationDto): Promise<Application | null> {
        await this.applicationRepository.update(id, application);
        return this.applicationRepository.findOneBy({ id });
    }
    
    async remove(id: number): Promise<void> {
        await this.applicationRepository.delete(id);
    }
}
