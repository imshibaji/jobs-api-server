import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class CreateTagDto {
    @Field(() => String)
    @ApiProperty({ type: String, required: true, description: 'tag name', example: 'tag name'})
    name: string;

    @Field(() => String)
    @ApiProperty({ type: String, required: true, description: 'tag slug', example: 'tag-slug'})
    slug: string;

    @Field(() => String, { nullable: true })
    @ApiProperty({ type: String, required: false, description: 'tag description', example: 'tag description'})
    description?: string;
}