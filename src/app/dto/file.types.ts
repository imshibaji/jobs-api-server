import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class FileInfo {
  @Field()
  filename: string;

  @Field()
  directory: string;

  @Field()
  fullPath: string; // Helpful for constructing the view/download URL
}