import { Injectable, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
