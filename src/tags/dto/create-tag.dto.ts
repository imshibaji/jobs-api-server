import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {
    @ApiProperty({ type: String, required: true, description: 'tag name', example: 'tag name'})
    name: string;

    @ApiProperty({ type: String, required: true, description: 'tag slug', example: 'tag-slug'})
    slug: string;

    @ApiProperty({ type: String, required: false, description: 'tag description', example: 'tag description'})
    description?: string;
}