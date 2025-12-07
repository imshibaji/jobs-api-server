import { Inject, Injectable } from '@nestjs/common';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { UpdateInterviewDto } from './dto/update-interview.dto';
import { Repository } from 'typeorm';
import { Interview } from './entities/interview.entity';

@Injectable()
export class InterviewsService {

  constructor(
    @Inject('INTERVIEW_REPOSITORY')
    private readonly interviewRepository: Repository<Interview>,
  ) {}

  create(createInterviewDto: CreateInterviewDto){
    return this.interviewRepository.save(createInterviewDto);
  }

  findAll() {
    return this.interviewRepository.find();
  }

  findOne(id: number) {
    return this.interviewRepository.findOneBy({ id });
  }

  update(id: number, updateInterviewDto: UpdateInterviewDto) {
    return this.interviewRepository.update(id, updateInterviewDto);
  }

  remove(id: number) {
    return this.interviewRepository.delete(id);
  }
}
