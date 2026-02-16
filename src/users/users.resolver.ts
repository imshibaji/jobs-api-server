import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserInput } from './dto/update-user.dto';

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [User])
    async users() {
        return await this.usersService.findAll();
    }

    @Query(() => User)
    async user(@Args('id') id: number) {
        return await this.usersService.findOne(id);
    }

    @Mutation(() => User, { nullable: true })
    async createUser(@Args('user') user: CreateUserDto) {
        return await this.usersService.create(user);
    }

    @Mutation(() => User)
    async updateUser(@Args('id') id: number, @Args('user') user: UpdateUserInput) {
        return await this.usersService.update(id, user);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: number) {
        return await this.usersService.delete(id);
    }
}
