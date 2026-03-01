import { PartialType } from '@nestjs/swagger';
import { CreateFeedbackDto } from './create-feedback.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';


export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {}

@InputType()
export class UpdateFeedbackInput extends InputPartialType(CreateFeedbackDto) {}