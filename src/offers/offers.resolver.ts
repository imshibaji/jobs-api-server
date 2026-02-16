import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OffersService } from './offers.service';
import { Offer } from './entities/offer.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferInput } from './dto/update-offer.dto';

@Resolver()
export class OffersResolver {
    constructor(private readonly offersService: OffersService) {}

    @Query(() => [Offer])
    async offers() {
        return this.offersService.findAll();
    }

    @Query(() => Offer, { nullable: true })
    async offer(id: number) {
        return this.offersService.findOne(id);
    }

    @Mutation(() => Offer)
    async createOffer(@Args('offer') offer: CreateOfferDto) {
        return this.offersService.create(offer);
    }

    @Mutation(() => Offer)
    async updateOffer(@Args('id') id: number, @Args('offer') offer: UpdateOfferInput) {
        return this.offersService.update(id, offer);
    }

    @Mutation(() => Boolean)
    async deleteOffer(@Args('id') id: number) {
        return this.offersService.remove(id);
    }
}
