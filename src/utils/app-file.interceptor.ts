import { applyDecorators, CallHandler, ExecutionContext, Injectable, mixin, NestInterceptor, NotFoundException, StreamableFile, Type, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { log } from 'console';
import { diskStorage } from 'multer';
import { basename, extname, join } from 'path';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import { readdir, stat } from 'fs/promises';

export function UseAppFileInterceptor(fieldName: string, destination?: string, fileTitle?: string) {
  return applyDecorators(
    UseInterceptors(
      FileInterceptor(fieldName, {
        storage: diskStorage({
          destination: destination || './uploads',
          filename: (req, file, cb) => {
            const fileName = (fileTitle || req.body.name || file.originalname.split('.')[0]).toLowerCase().replace(/[^a-z0-9]/gi, '-');
            return cb(null, `${fileName.trim()}${extname(file.originalname)}`);
          },
        }),
      }),
    ),
  );
}

export function AppFileInterceptor(fieldName: string, destination?: string, fileTitle?: string): Type<NestInterceptor> {
  @Injectable()
  class Interceptor implements NestInterceptor {
    fileInterceptor: NestInterceptor;

    constructor() {
      const config = {
        storage: diskStorage({
          destination: destination || './uploads',
          filename: (req, file, cb) => {
            const fileName = (fileTitle || req.body.name || file.originalname.split('.')[0]).toLowerCase().replace(/[^a-z0-9]/gi, '-');
            cb(null, `${fileName.trim()}${extname(file.originalname)}`);
          },
        }),
      };
      this.fileInterceptor = new (FileInterceptor(fieldName, config))();
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
      return this.fileInterceptor.intercept(context, next);
    }
  }
  return mixin(Interceptor);
}

export async function deleteFile(path: string) {
  try {
    await fs.promises.unlink(path);
    return true;
  } catch (error) {
    log(error);
  }
}

export async function fileExists(path: string) {
  try {
    const file = await fs.promises.readFile(path);
    return file;
  } catch (error) {
    return false;
  }
}

export async function listFiles(directory?: string) {
  try {
    const relativePath = directory || 'pictures';
    const uploadPath = join(process.cwd(), 'uploads', relativePath);

    if (!fs.existsSync(uploadPath)) return [];

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

export async function viewImageFile(filePath: string, type?: string) {
  try {
    await stat(filePath); // Check if file exists
    const file = fs.createReadStream(filePath);

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

export async function removeFile(filePath: string) {
  try {
    await fs.promises.unlink(filePath);
    return { message: 'File deleted successfully' };
  } catch (err) {
    throw new NotFoundException(`File not found at path: ${filePath}`);
  }
}

export async function readFile(filePath: string, type?: string, outputFileName?: any) {
  try {
    await stat(filePath); // Check if file exists
    const file = fs.createReadStream(filePath);
    const streamFile = new StreamableFile(file, {
        type: type || 'application/json',
        disposition: `attachment; filename="${outputFileName || 'output'+extname(filePath)}"`,
    });
    return streamFile;
  } catch (err) {
    throw new NotFoundException(`File not found at path: ${filePath}`);
  }
}

export async function readDirectory(directory?: string) {
  try {
    const relativePath = directory || 'pictures';
    const uploadPath = join(process.cwd(), 'uploads', relativePath);
    const files = await fs.promises.readdir(uploadPath);
    return files;
  } catch (err) {
    console.error('Error listing files:', err);
    return [];
  }
}

/**
 * Recursively reads a directory and returns a nested array structure.
 * Each folder is an array containing its files and subfolder arrays.
 */
export function getDirectory(targetPath: string): any[] {
  const stats = fs.statSync(targetPath);

  // If it's a file, just return the name/info
  if (!stats.isDirectory()) {
    return [basename(targetPath)];
  }

  // If it's a directory, read its children
  const files = fs.readdirSync(targetPath, { withFileTypes: true });

  return files.map((file) => {
    const fullPath = join(targetPath, file.name);

    if (file.isDirectory()) {
      // RECURSION: Return an object or array representing the folder and its contents
      return {
        folder: file.name,
        contents: getDirectory(fullPath),
      };
    }

    return file.name;
  });
}

