import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Public } from 'src/auth/auth.decorator';
import { AppService } from './app.service';
import { AppInfo } from './dto/app.types';
import { UploadedFile } from '@nestjs/common';



@Public()
@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  sayHello() {
    return 'Hello World!';
  }

  @Query(() => AppInfo)
  async getInfo() {
    return await this.appService.getInfo();
  }
}
