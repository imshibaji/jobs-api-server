import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private companyRepository: Repository<Company>
    ) {}

    async findAll(): Promise<Company[]> {
        return this.companyRepository.find({ where: { isDeleted: false } });
    }

    async findOne(id: number): Promise<Company | null> {
        return this.companyRepository.findOne({ where: { id, isDeleted: false } });
    }

    async create(companyData: CreateCompanyDto): Promise<Company> {
        const newCompany = this.companyRepository.create(companyData);
        return this.companyRepository.save(newCompany);
    }

    async update(id: number, updateData: UpdateCompanyDto): Promise<Company | null> {
        const company = await this.findOne(id);
        if (!company) {
            return null;
        }
        Object.assign(company, updateData);
        return this.companyRepository.save(company);
    }

    async softDelete(id: number): Promise<boolean> {
        const company = await this.findOne(id);
        if (!company) {
            return false;
        }
        company.isDeleted = true;
        await this.companyRepository.save(company);
        return true;
    }

    async restore(id: number): Promise<boolean> {
        const company = await this.findOne(id);
        if (!company) {
            return false;
        }
        company.isDeleted = false;
        await this.companyRepository.save(company);
        return true;
    }

    async delete(id: number): Promise<boolean> {
        const company = await this.findOne(id);
        if (!company) {
            return false;
        }
        await this.companyRepository.remove(company);
        return true;
    }
}
