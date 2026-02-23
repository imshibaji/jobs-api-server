import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export enum Role {
  Admin = 'admin',
  Recruiter = 'recruiter',
  User = 'user',
}

@InputType()
export class CreateUserDto {
  @Field(() => Number, { nullable: true })
  @ApiProperty({ type: Number, required: true, description: 'user id' })
  id?: number;

  @Field(() => String)
  @ApiProperty({ type: String, required: true, description: 'user full name' })
  name: string;

  @Field(() => String)
  @ApiProperty({
    type: String,
    required: true,
    description: 'user email address',
  })
  email: string;

  @Field(() => Boolean, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user phone number',
  })
  phoneNumber?: string;

  @Field(() => String)
  @ApiProperty({ type: String, required: true, description: 'user password' })
  password: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user profile image URL',
  })
  image?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    enum: Role,
    default: Role.User,
    description: 'user role, either admin or user',
  })
  role?: Role;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user instagram ID',
  })
  instagramId?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user facebook ID',
  })
  facebookId?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user youtube ID',
  })
  youtubeId?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({
    type: String,
    required: false,
    description: 'user linkedin ID',
  })
  linkedinId?: string;

  @Field(() => String, { nullable: true })
  @ApiProperty({ type: String, required: false, description: 'user github ID' })
  githubId?: string;
}
