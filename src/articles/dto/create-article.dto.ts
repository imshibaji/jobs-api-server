import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty({ description: 'The title of the article', example: 'How to write a blog post', required: true })
    title: string;

    @ApiProperty({ description: 'The slug of the article', example: 'how-to-write-a-blog-post', required: true })
    slug: string;

    @ApiProperty({ description: 'The content of the article', example: 'This is the content of the article', required: true })
    content: string;
    
    @ApiProperty({ description: 'The image of the article', example: 'https://example.com/image.jpg', required: false })
    image?: string;

    @ApiProperty({ description: 'The summary of the article', example: 'This is the summary of the article', required: false })
    summary?: string;

    @ApiProperty({ description: 'The tags of the article', example: ['tag1', 'tag2'], required: true })
    tags?: string[];

    @ApiProperty({ description: 'The ID of the user who created the article', example: 1, required: true })
    userId: number;

    @ApiProperty({ description: 'Whether the article is published or not', example: true, required: false })
    isPublished?: boolean;

    @ApiProperty({ description: 'Whether the article is archived or not', example: false, required: false })
    isArchived?: boolean;

    @ApiProperty({ description: 'Whether the article is deleted or not', example: false, required: false })
    isDeleted?: boolean;

    @ApiProperty({ description: 'The date and time when the article was published', example: '2022-01-01T00:00:00.000Z', required: false })
    publishedAt?: Date;
}