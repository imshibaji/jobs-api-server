import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserInput } from './dto/update-user.dto';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { Applicant } from 'src/applicants/applicant.entity';

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
        private readonly applicantsService: ApplicantsService
    ) {}

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

    // Relationship resolver to fetch applicants for a user
    
    @ResolveField(() => [Applicant])
    async applicants(@Parent() user: User) {
        // If the user already has applicants loaded, return them
        if (user.applicants) {
            return user.applicants;
        }
        
        // Otherwise, fetch them from the service
        const data = await this.applicantsService.findOneBy({ userId: user.id });
        
        // Return the data if found, or an empty array to satisfy GraphQL
        return data || []; 
    }
}
