import { PartialType } from '@nestjs/swagger';
import { CreateEducationDto } from './create-education.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {}

@InputType()
export class UpdateEducationInput extends InputPartialType(
  CreateEducationDto,
) {}
