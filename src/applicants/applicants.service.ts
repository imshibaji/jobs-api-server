import { Inject, Injectable } from '@nestjs/common';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Repository } from 'typeorm';
import { Applicant } from './applicant.entity';
import { log } from 'console';

@Injectable()
export class ApplicantsService {

  constructor(
    @Inject('APPLICANT_REPOSITORY')
    private applicantRepository: Repository<Applicant>
  ) {}

  create(createApplicantDto: CreateApplicantDto) {
    try {
      return this.applicantRepository.save(createApplicantDto);
    } catch (error) {
      log(error);
    }
  }

  findAll() {
    try {
      return this.applicantRepository.find({
        order: {
          id: 'DESC'
        }
      });
    } catch (error: any) {
      log(error);
    }
  }

  findOne(id: number) {
    try {
      return this.applicantRepository.findOneBy({ id });
    } catch (error: any) {
      log(error);
    }
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    try {
      return this.applicantRepository.update(id, {...updateApplicantDto, updatedAt: new Date() });
    } catch (error: any) {
      log(error);
    }
  }

  remove(id: number) {
    try {
      return this.applicantRepository.delete(id);
    } catch (error: any) {
      console.log(error);
    }
  }
}
