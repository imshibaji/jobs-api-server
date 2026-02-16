import { PartialType } from "@nestjs/swagger";
import { CreateApplicationDto } from "./create-application.dto";
import { InputType, PartialType as InputPartialType } from "@nestjs/graphql";

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {}


@InputType()
export class UpdateApplicationInput extends InputPartialType(CreateApplicationDto) {}