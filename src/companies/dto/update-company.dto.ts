import { PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}

@InputType()
export class UpdateCompanyInput extends InputPartialType(CreateCompanyDto) {}
