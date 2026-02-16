import { PartialType } from "@nestjs/swagger";
import { CreateArticleDto } from "./create-article.dto";
import { InputType, PartialType as InputPartialType } from "@nestjs/graphql";

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

@InputType()
export class UpdateArticleInput extends InputPartialType(CreateArticleDto) {}