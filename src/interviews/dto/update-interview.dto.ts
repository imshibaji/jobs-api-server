import { PartialType } from '@nestjs/swagger';
import { CreateInterviewDto } from './create-interview.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';


export class UpdateInterviewDto extends PartialType(CreateInterviewDto) {}

@InputType()
export class UpdateInterviewInput extends InputPartialType(CreateInterviewDto) {}
