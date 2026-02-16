import { PartialType } from "@nestjs/swagger";
import { CreateTagDto } from "./create-tag.dto";
import { InputType, PartialType as InputPartialType } from "@nestjs/graphql";


export class UpdateTagDto extends PartialType(CreateTagDto) {}

@InputType()
export class UpdateTagInput extends InputPartialType(CreateTagDto) {}