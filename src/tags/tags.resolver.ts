import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { UpdateTagInput } from './dto/update-tag.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.entity';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Query(() => [Tag])
  async tags() {
    return await this.tagsService.findAll();
  }

  @Query(() => Tag)
  async tag(@Args('id') id: number) {
    return await this.tagsService.findOne(id);
  }

  @Query(() => [Tag])
  async searchTags(@Args('prop') prop: string, @Args('value') value: string) {
    return await this.tagsService.searchBy(prop, value);
  }

  @Mutation(() => Tag)
  async createTag(@Args('tag') createTagInput: CreateTagDto) {
    return await this.tagsService.create(createTagInput);
  }

  @Mutation(() => Tag)
  async updateTag(
    @Args('id') id: number,
    @Args('tag') updateTagInput: UpdateTagInput,
  ) {
    return await this.tagsService.update(id, updateTagInput);
  }

  @Mutation(() => Boolean)
  async deleteTag(@Args('id') id: number) {
    return await this.tagsService.delete(id);
  }
}
