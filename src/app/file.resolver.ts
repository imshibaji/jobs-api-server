import { Resolver, Query, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { NotFoundException, StreamableFile } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { Directory, FileInfo } from './dto/file.types';
import { Public } from '../auth/auth.decorator';
import { getDirectory, readFile } from 'src/utils/app-file.interceptor';

@Resolver()
export class FileResolver {

  @Public()
  @Query(()=> [Directory!])
  async directory(
    @Args('path', {nullable: true, defaultValue: 'uploads'})
    pathName: string
  ){
    return getDirectory(pathName);
  }

  // 1. List Files (Replaces @Get('list'))
  @Public()
  @Query(() => [String])
  async listFiles(
    @Args('listFiles', { nullable: true, defaultValue: 'pictures' })
    directory: string,
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

  @Public()
  @Query(() => [FileInfo]) // 👈 Changed from [String] to [FileInfo]
  async filesDetails(
    @Args('filesDetails', { nullable: true, defaultValue: 'pictures' })
    directory: string,
  ): Promise<FileInfo[]> {
    try {
      const relativePath = directory || 'pictures';
      const uploadPath = join(process.cwd(), 'uploads', relativePath);

      if (!fs.existsSync(uploadPath)) return [];

      const files = await fs.promises.readdir(uploadPath);

      // Map the string array to the new FileInfo structure
      return files.map((file) => ({
        filename: file,
        directory: relativePath,
        fullPath: `${relativePath}/${file}`,
      }));
    } catch (err) {
      console.error('Error listing files:', err);
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
