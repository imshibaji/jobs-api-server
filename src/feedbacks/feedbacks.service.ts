import { Inject, Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { ILike, Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject('FEEDBACK_REPOSITORY')
    private feedbackRepository: Repository<Feedback>,
  ) {}


  searchBy(prop: string, value): Promise<Feedback[]>{
    return this.feedbackRepository.findBy({[prop]: ILike(`%${value}%`) });
  }

  create(createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackRepository.save(createFeedbackDto);
  }

  findAll() {
    return this.feedbackRepository.find();
  }

  findOne(id: number) {
    return this.feedbackRepository.findOneBy({ id });
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return this.feedbackRepository.update(id, updateFeedbackDto);
  }

  remove(id: number) {
    return this.feedbackRepository.delete(id);
  }
}
