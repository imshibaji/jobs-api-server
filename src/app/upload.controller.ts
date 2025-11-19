import { Controller, Post, UploadedFile, UseInterceptors, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { Public } from 'src/auth/auth.decorator';

@Public()
@Controller()
export class UploadController {

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      // 1. DYNAMIC DESTINATION
      destination: (req: any, file, cb) => {
        // Get folder from body or default to 'default_uploads'
        // sanitize to prevent security issues (e.g. ../../system)
        const folderName = req.body.folder ? req.body.folder.replace(/[^a-z0-9]/gi, '_') : 'default';
        const uploadPath = `./uploads/${folderName}`;

        // Create folder if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
          fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
      },
      // 2. DYNAMIC FILENAME
      filename: (req: any, file, cb) => {
        // Get custom name from body or use original
        const name = req.body.customName 
          ? req.body.customName.replace(/[^a-z0-9]/gi, '-') // Sanitize
          : file.originalname.split('.')[0];
          
        const ext = extname(file.originalname);
        cb(null, `${name}${ext}`);
      },
    }),
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        folder: { type: 'string', example: 'profile_pictures' },
        customName: { type: 'string', example: 'user-123-avatar' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  uploadFiles(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    if (!file) {
        throw new BadRequestException('File is required');
    }
    // Note: body.folder and body.customName are available here too
    return { 
        message: 'File uploaded successfully', 
        path: file.path,
        finalPath: process.env.APP_URL +'/'+ file.path,
        filename: file.filename,
        body: body
    };
  }
}