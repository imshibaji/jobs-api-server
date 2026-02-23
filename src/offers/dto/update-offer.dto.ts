import { PartialType } from '@nestjs/swagger';
import { CreateOfferDto } from './create-offer.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {}

@InputType()
export class UpdateOfferInput extends InputPartialType(CreateOfferDto) {}
