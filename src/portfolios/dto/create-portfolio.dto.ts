import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePortfolioDto {
    @Field(() => Number, { nullable: true })
    userId?: number;

    @Field(() => Number, { nullable: true })
    applicantId?: number;

    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => String)
    url: string;

    @Field(() => String, { nullable: true })
    image?: string;
}
