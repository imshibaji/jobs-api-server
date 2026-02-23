import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppInfo {
  @Field(() => String, { nullable: true })
  appName: string;
  @Field(() => String, { nullable: true })
  appVersion: string;
  @Field(() => String, { nullable: true })
  appEnvironment: string;
  @Field(() => Number, { nullable: true })
  appPort: number;
  @Field(() => String, { nullable: true })
  appBaseUrl: string;
  @Field(() => String, { nullable: true })
  appSecretKey: string;
}
