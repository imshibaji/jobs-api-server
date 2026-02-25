import { Inject, Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { ILike, Repository } from 'typeorm';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async searchBy(prop: string, value): Promise<Offer[]>{
    return this.offerRepository.findBy({[prop]: ILike(`%${value}%`) });
  }

  create(createOfferDto: CreateOfferDto) {
    return this.offerRepository.save(createOfferDto);
  }

  findAll() {
    return this.offerRepository.find();
  }

  findOne(id: number) {
    return this.offerRepository.findOneBy({ id });
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return this.offerRepository.update(id, updateOfferDto);
  }

  remove(id: number) {
    return this.offerRepository.delete(id);
  }
}
