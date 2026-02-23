import { PartialType } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';
import { InputType, PartialType as InputPartialType } from '@nestjs/graphql';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}

@InputType()
export class UpdateSkillInput extends InputPartialType(CreateSkillDto) {}
