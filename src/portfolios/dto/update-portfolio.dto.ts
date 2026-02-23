import { PartialType } from '@nestjs/swagger';
import { CreatePortfolioDto } from './create-portfolio.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdatePortfolioDto extends PartialType(CreatePortfolioDto) {}

@InputType()
export class UpdatePortfolioInput extends InputPartialType(
  CreatePortfolioDto,
) {}
