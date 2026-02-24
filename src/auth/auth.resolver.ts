import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Public } from './auth.decorator';
import { UpdateResult } from 'typeorm';
import { AuthResponse, JwtToken } from './utils/auth.types';
import { User } from '../users/users.entity';

@Public()
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => User, { nullable: true })
  async me(@Args('token') token: string): Promise<User | null> {
    return await this.authService.me(token);
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<JwtToken> {
    return await this.authService.signIn(email, password);
  }

  @Mutation(() => AuthResponse)
  async register(
    @Args('email') email: string,
    @Args('name') name: string,
    @Args('password') password: string,
    @Args('phoneNumber', { nullable: true }) phoneNumber?: string,
    @Args('image', { nullable: true }) image?: string,
    @Args('role', { nullable: true }) role?: string,
    @Args('facebookId', { nullable: true }) facebookId?: string,
    @Args('githubId', { nullable: true }) githubId?: string,
    @Args('instagramId', { nullable: true }) instagramId?: string,
    @Args('linkedinId', { nullable: true }) linkedinId?: string,
    @Args('youtubeId', { nullable: true }) youtubeId?: string,
  ): Promise<JwtToken> {
    return await this.authService.signUp({
      email,
      name,
      password,
      phoneNumber,
      image,
      role,
      facebookId,
      githubId,
      instagramId,
      linkedinId,
      youtubeId,
    });
  }

  @Mutation(() => String)
  async forgetPassword(@Args('email') email: string): Promise<String> {
    return await this.authService.forgetPassword(email);
  }

  @Mutation(() => String)
  async resetPassword(
    @Args('userId') userId: string,
    @Args('newPassword') newPassword: string,
  ): Promise<UpdateResult> {
    return await this.authService.resetPassword(userId, newPassword);
  }

  @Mutation(() => String)
  async encryptPassword(@Args('text') text: string): Promise<string> {
    return await this.authService.encryptPassword(text);
  }

  @Mutation(() => Boolean)
  async verifyPassword(
    @Args('password') password: string,
    @Args('hashedPassword') hashedPassword: string,
  ): Promise<boolean> {
    return await this.authService.verifyPassword(password, hashedPassword);
  }
}
