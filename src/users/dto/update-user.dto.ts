import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { InputType, PartialType as InputPartialType } from "@nestjs/graphql";


export class UpdateUserDto extends PartialType(CreateUserDto) {}

@InputType()
export class UpdateUserInput extends InputPartialType(CreateUserDto) {}