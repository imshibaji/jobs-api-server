import { Inject, Injectable } from '@nestjs/common';
import { CreateJoiningDto } from './dto/create-joining.dto';
import { UpdateJoiningDto } from './dto/update-joining.dto';
import { Repository } from 'typeorm';
import { Joining } from './entities/joining.entity';

@Injectable()
export class JoiningsService {

  constructor(
    @Inject('JOINING_REPOSITORY')
    private readonly joiningRepository: Repository<Joining>,
  ) {}

  create(createJoiningDto: CreateJoiningDto) {
    return this.joiningRepository.save(createJoiningDto);
  }

  findAll() {
    return this.joiningRepository.find();
  }

  findOne(id: number) {
    return this.joiningRepository.findOneBy({ id });
  }

  update(id: number, updateJoiningDto: UpdateJoiningDto) {
    return this.joiningRepository.update(id, updateJoiningDto);
  }

  remove(id: number) {
    return this.joiningRepository.delete(id);
  }
}
