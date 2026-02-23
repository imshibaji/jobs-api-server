import { Inject, Injectable } from '@nestjs/common';
import { Repository, ILike } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>,
  ) {}

  async searchBy(prop: string, value: string): Promise<Company[]> {
    return this.companyRepository.findBy({
      [prop]: ILike(`%${value}%`),
      isDeleted: false,
    });
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find({
      where: { isDeleted: false },
      relations: ['user', 'jobs'],
    });
  }

  async findOne(id: number): Promise<Company | null> {
    return (
      this.companyRepository.findOne({
        where: { id, isDeleted: false },
        relations: ['user', 'jobs'],
      }) || null
    );
  }

  async findAllByUserId(userId: number): Promise<Company[]> {
    return await this.companyRepository.find({
      where: { userId: userId }, // Returns an Array []
    });
  }

  async findOneBy(data: any): Promise<Company | null> {
    return this.companyRepository.findOneBy(data);
  }

  async findBy(data: any): Promise<Company[]> {
    return this.companyRepository.findBy(data);
  }

  async create(companyData: CreateCompanyDto): Promise<Company> {
    const newCompany = this.companyRepository.create({
      ...companyData,
      isDeleted: false,
    });
    return this.companyRepository.save(newCompany);
  }

  async update(
    id: number,
    updateData: UpdateCompanyDto,
  ): Promise<Company | null> {
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
