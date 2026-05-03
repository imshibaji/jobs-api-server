import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FileInfo {
  @Field()
  filename!: string;

  @Field()
  directory!: string;

  @Field()
  fullPath!: string; // Helpful for constructing the view/download URL
}

@ObjectType()
export class Directory {
  @Field(() => String)
  folder?: string;

  @Field(() => [String])
  contents?: string[];
}