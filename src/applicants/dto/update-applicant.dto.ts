import { PartialType } from '@nestjs/swagger';
import { CreateApplicantDto } from './create-applicant.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateApplicantDto extends PartialType(CreateApplicantDto) {}

@InputType()
export class UpdateApplicantInput extends InputPartialType(CreateApplicantDto) {}
