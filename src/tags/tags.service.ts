import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
    constructor(
        @Inject('TAG_REPOSITORY')
        private readonly tagsRepository: Repository<Tag>
    ) {}

    async findAll() {
        return await this.tagsRepository.find();
    }

    async findOne(id: number) {
        return await this.tagsRepository.findOneBy({ id });
    }

    async create(tag: CreateTagDto) {
        return await this.tagsRepository.save(tag);
    }

    async update(id: number, tag: UpdateTagDto) {
        return await this.tagsRepository.update(id, tag);
    }

    async delete(id: number) {
        return await this.tagsRepository.delete(id);
    }
}
