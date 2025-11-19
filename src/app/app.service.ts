import { Injectable, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody } from '@nestjs/swagger';

@Injectable()
export class AppService {
  getInfo(): Object {
    return {
      appName: process.env.APP_NAME,
      appVersion: process.env.APP_VERSION,
      appEnvironment: process.env.APP_ENVIRONMENT,
      appPort: process.env.APP_PORT,
      appBaseUrl: process.env.APP_URL,
      appSecretKey: process.env.APP_SECRET_KEY,
    };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
