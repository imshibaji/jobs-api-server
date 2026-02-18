import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Resolver()
export class FileResolver {
  
  // 1. List Files (Replaces @Get('list'))
  @Query(() => [String])
  async listFiles(
    @Args('directory', { nullable: true, defaultValue: 'pictures' }) directory: string,
  ): Promise<string[]> {
    try {
      const uploadPath = join(process.cwd(), 'uploads', directory);
      if (!fs.existsSync(uploadPath)) return [];
      
      const files = await fs.promises.readdir(uploadPath);
      return files;
    } catch (err) {
      return [];
    }
  }

  // 2. Delete File (Replaces @Get('delete'))
  @Mutation(() => Boolean)
  async deleteFile(
    @Args('filename') filename: string,
    @Args('folder', { defaultValue: 'pictures' }) folder: string,
  ): Promise<boolean> {
    const filePath = join(process.cwd(), 'uploads', folder, filename);
    try {
      await fs.promises.unlink(filePath);
      return true;
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }
}