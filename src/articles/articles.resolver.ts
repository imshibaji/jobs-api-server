import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleInput } from './dto/update-article.dto';

@Resolver()
export class ArticlesResolver {
    constructor(private readonly articlesService: ArticlesService) {}

    @Query(() => [Article])
    findAll() {
        return this.articlesService.findAll();
    }

    @Query(() => Article)
    findOne(id: number) {
        return this.articlesService.findOne(id);
    }
    
    @Mutation(() => Article)
    create(@Args('article') createArticleInput: CreateArticleDto) {
        return this.articlesService.create(createArticleInput);
    }


    @Mutation(() => Article)
    update(@Args('id') id: number, @Args('article') updateArticleInput: UpdateArticleInput) {
        return this.articlesService.update(id, updateArticleInput);
    }

    @Mutation(() => Article)
    remove(@Args('id') id: number) {
        return this.articlesService.remove(id);
    }
}
