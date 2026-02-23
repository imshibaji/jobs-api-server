import { Inject, Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Repository } from 'typeorm';
import { Applicant } from './applicant.entity';

@Injectable()
export class ApplicantsService {
  constructor(
    @Inject('APPLICANT_REPOSITORY')
    private applicantRepository: Repository<Applicant>,
  ) {}

  async searchBy(prop: string, value: string): Promise<Applicant[]> {
    return this.applicantRepository.findBy({ [prop]: value });
  }

  create(createApplicantDto: CreateApplicantDto) {
    return this.applicantRepository.save(createApplicantDto);
  }

  findAll() {
    return this.applicantRepository.find({
      order: { id: 'DESC' },
      relations: [
        'user',
        'applications',
        'educations',
        'experiences',
        'skillList',
        'portfolios',
      ],
    });
  }

  findOne(id: number) {
    return this.applicantRepository.findOne({
      where: { id },
      relations: [
        'user',
        'applications',
        'educations',
        'experiences',
        'skillList',
        'portfolios',
      ],
    });
  }

  findOneBy(data: any) {
    return this.applicantRepository.findOneBy(data);
  }

  findBy(data: any) {
    return this.applicantRepository.findBy(data);
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return this.applicantRepository.update(id, {
      ...updateApplicantDto,
      updatedAt: new Date(),
    });
  }

  remove(id: number) {
    return this.applicantRepository.delete(id);
  }
}
