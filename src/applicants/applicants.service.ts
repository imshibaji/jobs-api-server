import { Inject, Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Repository } from 'typeorm';
import { Applicant } from './applicant.entity';

@Injectable()
export class ApplicantsService {

  constructor(
    @Inject('APPLICANT_REPOSITORY')
    private applicantRepository: Repository<Applicant>
  ) {}

  create(createApplicantDto: CreateApplicantDto) {
    return this.applicantRepository.save(createApplicantDto);
  }

  findAll() {
    return this.applicantRepository.find();
  }

  findOne(id: number) {
    return this.applicantRepository.findOneBy({ id });
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return this.applicantRepository.update(id, {...updateApplicantDto, updatedAt: new Date() });
  }

  remove(id: number) {
    return this.applicantRepository.delete(id);
  }
}
