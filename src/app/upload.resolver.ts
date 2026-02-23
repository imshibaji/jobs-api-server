import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import type { FileUpload } from 'graphql-upload-ts';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { extname, join } from 'path';

@Resolver()
export class UploadResolver {
  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Args('folder', { nullable: true }) folder: string = 'default',
    @Args('customName', { nullable: true }) customName?: string,
  ): Promise<boolean> {
    const { createReadStream, filename, mimetype } = file;

    // 1. Sanitize and Create Dynamic Path
    const folderName = folder.replace(/[^a-z0-9]/gi, '_');
    const uploadDir = join(process.cwd(), 'uploads', folderName);

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    // 2. Determine Dynamic Filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = extname(filename);
    const baseName = customName
      ? customName.replace(/[^a-z0-9]/gi, '-')
      : filename.split('.')[0];

    const finalFileName = `${baseName}-${uniqueSuffix}${extension}`;
    const filePath = join(uploadDir, finalFileName);

    // 3. Process the Stream
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', () => resolve(true))
        .on('error', (err) => {
          console.error('Upload Error:', err);
          reject(false);
        }),
    );
  }
}
