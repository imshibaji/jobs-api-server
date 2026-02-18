import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleInput } from './dto/update-article.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';

@Resolver(() => Article)
export class ArticlesResolver {
    constructor(
        private readonly articlesService: ArticlesService,
        private readonly usersService: UsersService
    ) {}

    @Query(() => [Article])
    findAll() {
        return this.articlesService.findAll();
    }

    @Query(() => Article)
    findOne(id: number) {
        return this.articlesService.findOne(id);
    }

    @Query(() => [Article])
    searchBy(@Args('prop') prop: string, @Args('value') value: string) {
        return this.articlesService.searchBy(prop, value);
    }

    @ResolveField(() => User)
    async user(@Parent() article: Article) {
        return await this.usersService.findOne(article.userId);
    }
    
    @Mutation(() => Article)
    createArticle(@Args('article') createArticleInput: CreateArticleDto) {
        return this.articlesService.create(createArticleInput);
    }


    @Mutation(() => Article)
    updateUpdate(@Args('id') id: number, @Args('article') updateArticleInput: UpdateArticleInput) {
        return this.articlesService.update(id, updateArticleInput);
    }

    @Mutation(() => Article)
    deleteArticle(@Args('id') id: number) {
        return this.articlesService.remove(id);
    }
}
