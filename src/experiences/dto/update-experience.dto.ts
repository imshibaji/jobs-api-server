import { PartialType } from "@nestjs/swagger";
import { CreateExperienceDto } from "./create-experience.dto";
import { InputType, PartialType as InputPartialType } from "@nestjs/graphql";

export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {}


@InputType()
export class UpdateExperienceInput extends InputPartialType(CreateExperienceDto) {}