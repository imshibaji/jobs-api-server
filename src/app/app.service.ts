import {
  BadRequestException,
  Header,
  Injectable,
  NotFoundException,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createReadStream } from 'node:fs';
import { stat } from 'fs/promises';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getInfo(): Object {
    return {
      appName: this.configService.get('APP_NAME'),
      appVersion: this.configService.get('APP_VERSION'),
      appEnvironment: this.configService.get('APP_ENVIRONMENT'),
      appPort: this.configService.get('APP_PORT'),
      appBaseUrl: this.configService.get('APP_BASE_URL'),
      appSecretKey: this.configService.get('APP_SECRET_KEY'),
    };
  }

  @Header('access-control-allow-origin', '*')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  async imageView(
    filename: string,
    folder: string,
    type?: string,
  ): Promise<StreamableFile> {
    const filePath = join(
      process.cwd(),
      'uploads',
      folder || 'pictures',
      filename,
    );
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

  @Header('access-control-allow-origin', '*')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  async downloadFile(query: any): Promise<StreamableFile> {
    const filePath = join(
      process.cwd(),
      'uploads/' + query.Folder,
      query.Filename || 'package.json',
    );

    try {
      // Check if file exists asynchronously before creating the stream
      await stat(filePath);

      const file = createReadStream(filePath);
      return new StreamableFile(file, {
        type: query.Type || 'application/json',
        disposition: `attachment; filename="${query.OutputFileName || 'package.json'}"`,
      });
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException(`File not found at path: ${filePath}`);
      }
      throw new BadRequestException(`Error accessing file: ${error.message}`);
    }
  }

  async deleteFile(filename: string, folder: string) {
    const filePath = join(
      process.cwd(),
      'uploads',
      folder || 'pictures',
      filename,
    );
    try {
      await fs.promises.unlink(filePath);
      return { message: 'File deleted successfully' };
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }
}
