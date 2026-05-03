import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateFeedbackDto {
  @Field(() => Number, { nullable: true })
  @ApiProperty({ type: Number, example: 1 })
  id?: number;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ type: Number, example: 1 })
  userId?: number;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, example: 'jobs' })
  tableName?: string;

  @Field(() => Number, { nullable: true })
  @ApiProperty({ type: Number, example: 1 })
  tableId?: number;

  @Field(() => String)
  @ApiProperty({ type: String, example: 'Jane Doe' })
  name!: string;

  @Field(() => String)
  @ApiProperty({ type: String, example: 'jane@example.com' })
  email!: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, example: '+1-555-1234' })
  phone?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, example: 'Acme Inc.' })
  orgName?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, example: 'https://example.com/avatar.jpg' })
  avatar?: string;

  @Field(() => Number)
  @ApiProperty({ type: Number, example: 5 })
  rating!: number;

  @Field(() => String)
  @ApiProperty({ type: String, example: 'I love this job!' })
  comment!: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, example: 'active' })
  status?: string;
}
