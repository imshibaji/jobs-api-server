import { Injectable, InternalServerErrorException, NotFoundException, StreamableFile } from '@nestjs/common';
import { createReadStream, createWriteStream, existsSync, mkdirSync, unlinkSync } from 'fs';
import { join, extname } from 'path';
import { FileUpload } from 'graphql-upload-ts';
import { readdir, stat, unlink } from 'fs/promises';

@Injectable()
export class GraphFileUploadService {
  async saveFile(
    file: FileUpload,
    folder?: string,
    title?: string,
  ): Promise<string> {
    const { createReadStream, filename } = file;

    // 1. Sanitize and Create Dynamic Path
    const folderName = folder!.replace(/[^a-z0-9]/gi, '_');
    const uploadDir = join(process.cwd(), 'uploads', folderName);

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    // 2. Determine Dynamic Filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = extname(filename);
    const baseName = title
      ? title.replace(/[^a-z0-9]/gi, '-')
      : filename.split('.')[0];

    const finalFileName = `${baseName}-${uniqueSuffix}${extension}`;
    const filePath = join(uploadDir, finalFileName);

    // 3. Process the Stream
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', () => resolve(finalFileName))
        .on('error', (err) => {
          console.error('Upload Error:', err);
          reject(new InternalServerErrorException('Could not save file'));
        }),
    );
  }

  async deleteFile(path: string) {
    try {
      unlinkSync(path);
    } catch (error) {
      console.log(error);
    }
  }

  async listFiles(directory?: string) {
    try {
      const relativePath = directory || 'pictures';
      const uploadPath = join(process.cwd(), 'uploads', relativePath);

      if (!existsSync(uploadPath)) return [];

      const files = await readdir(uploadPath);

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

  async viewImageFile(filePath: string, type?: string) {
    try {
      await stat(filePath); // Check if file exists
      const file = createReadStream(filePath);
  
      // Return the StreamableFile. NestJS handles setting the Content-Type header correctly.
      const imageBlob = new StreamableFile(file, {
        type: type || 'image/jpeg',
        disposition: 'inline',
      });
  
      return imageBlob;
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }
  
  async removeFile(filePath: string) {
    try {
      await unlink(filePath);
      return { message: 'File deleted successfully' };
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }
  
  async readFile(filePath: string, type?: string, outputFileName?: any) {
    try {
      await stat(filePath); // Check if file exists
      const file = createReadStream(filePath);
      const streamFile = new StreamableFile(file, {
          type: type || 'application/json',
          disposition: `attachment; filename="${outputFileName || 'output'+extname(filePath)}"`,
      });
      return streamFile;
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }

  async readDirectory(directory?: string) {
    try {
      const relativePath = directory || 'pictures';
      const uploadPath = join(process.cwd(), 'uploads', relativePath);
      const files = await readdir(uploadPath);
      return files;
    } catch (err) {
      console.error('Error listing files:', err);
      return [];
    }
  }
}