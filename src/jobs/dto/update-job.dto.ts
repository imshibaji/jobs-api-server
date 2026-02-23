import { PartialType } from '@nestjs/swagger';
import { CreateJobDto } from './create-job.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateJobDto extends PartialType(CreateJobDto) {}

@InputType()
export class UpdateJobInput extends InputPartialType(CreateJobDto) {}
