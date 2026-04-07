import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateArticleDto {
  @Field(() => String)
  @ApiProperty({
    description: 'The title of the article',
    example: 'How to write a blog post',
    required: true,
  })
  title: string;

  @Field(() => String)
  @ApiProperty({
    description: 'The slug of the article',
    example: 'how-to-write-a-blog-post',
    required: true,
  })
  slug: string;

  @Field(() => String)
  @ApiProperty({
    description: 'The content of the article',
    example: 'This is the content of the article',
    required: true,
  })
  content: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    description: 'The image of the article',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  image?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    description: 'The summary of the article',
    example: 'This is the summary of the article',
    required: false,
  })
  summary?: string;

  @Field(() => [String], { nullable: true })
  @ApiProperty({
    description: 'The tags of the article',
    example: ['tag1', 'tag2'],
    required: true,
  })
  tags?: string[];

  @Field(() => Number)
  @ApiProperty({
    description: 'The ID of the user who created the article',
    example: 1,
    required: true,
  })
  userId?: number;

  @Field(() => String)
  @ApiProperty({
    description: 'The type of the article',
    enum: ['post', 'page', 'article'],
    example: 'post',
    required: true,
  })
  type: string;

  @Field(() => String)
  @ApiProperty({
    description: 'The status of the article',
    enum: ['draft', 'published', 'archived', 'deleted'],
    example: 'draft',
    required: true,
  })
  status?: string;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({
    description: 'Whether the article is archived or not',
    example: false,
    required: false,
  })
  isArchived?: boolean;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({
    description: 'Whether the article is deleted or not',
    example: false,
    required: false,
  })
  isDeleted?: boolean;

  @Field(() => Date, { nullable: true })
  @ApiProperty({
    description: 'The date and time when the article was published',
    example: '2022-01-01T00:00:00.000Z',
    required: false,
  })
  publishedAt?: Date;
}
