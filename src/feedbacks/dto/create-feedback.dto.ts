import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedbackDto {
  @ApiProperty({ type: Number, example: 1 })
  id?: number;

  @ApiProperty({ type: Number, example: 1 })
  userId?: number;

  @ApiProperty({ type: String, example: 'jobs' })
  tableName?: string;

  @ApiProperty({ type: Number, example: 1 })
  tableId?: number;

  @ApiProperty({ type: String, example: 'Jane Doe' })
  name: string;

  @ApiProperty({ type: String, example: 'jane@example.com' })
  email: string;

  @ApiProperty({ type: String, example: '+1-555-1234' })
  phone?: string;

  @ApiProperty({ type: String, example: 'Acme Inc.' })
  orgName?: string;

  @ApiProperty({ type: String, example: 'https://example.com/avatar.jpg' })
  avatar?: string;

  @ApiProperty({ type: Number, example: 5 })
  rating: number;

  @ApiProperty({ type: String, example: 'I love this job!' })
  comment: string;

  @ApiProperty({ type: String, example: 'active' })
  status?: string;
}
