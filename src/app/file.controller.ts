import { Controller, Get, StreamableFile, Query, Header, NotFoundException, BadRequestException } from '@nestjs/common';
import * as fs from 'fs';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { ApiBearerAuth, ApiProduces, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { stat } from 'node:fs/promises';
import { Public } from 'src/auth/auth.decorator';

@ApiBearerAuth()
@ApiTags('Files Management')
@Controller('file')
export class FileController {

  @Get('list')
  @ApiQuery({ name: 'directory', type: 'string', required: false, example: 'pictures' })
  async readDirectoryAsync(@Query('directory') directoryPath: string): Promise<String[]> {
    try {
      const files = await fs.promises.readdir('uploads/'+directoryPath);
      console.log('Files in directory (async):', files);
      return files;
    } catch (err) {
      console.error('Error reading directory (async):', err);
    }
    return [];
  }

  @Public()
  @Get('view')
  @ApiQuery({ name: 'filename', type: 'string', required: false, example: 'avatar.jpg' })
  @ApiQuery({ name: 'folder', type: 'string', required: false, example: 'pictures' })
  @ApiQuery({ name: 'type', type: 'string', required: false, example: 'image/jpeg' })
  @ApiProduces('image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'image/bmp', 'image/tiff', 'image/avif') // Informs Swagger the endpoint returns an image
  @Header('access-control-allow-origin', '*')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  @ApiResponse({ status: 200, description: 'File found' })
  @ApiResponse({ status: 404, description: 'File not found' })
  async imageView(@Query('filename') filename: string, @Query('folder') folder: string, @Query('type') type?: string): Promise<StreamableFile> {
    const filePath = join(process.cwd(), 'uploads', folder || 'pictures', filename);
    try {
      await stat(filePath); // Check if file exists
      const file = createReadStream(filePath);
      
      // Return the StreamableFile. NestJS handles setting the Content-Type header correctly.
      const imageBlob = new StreamableFile(file, { type: type || 'image/jpeg' });

      return imageBlob;
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }


  @Public()
  @Get('download')
  @ApiQuery({ name: 'Folder', type: 'string', required: false, example: 'pictures' })
  @ApiQuery({ name: 'Type', type: 'string', required: false, example: 'image/jpg' })
  @ApiQuery({ name: 'Filename', type: 'string', required: false, example: 'avatar.jpg' })
  @ApiQuery({ name: 'OutputFileName', type: 'string', required: false, example: 'image.jpg' })
  @Header('access-control-allow-origin', '*')
  @Header('Cross-Origin-Resource-Policy', 'cross-origin')
  @ApiResponse({ status: 200, description: 'File found' })
  @ApiResponse({ status: 404, description: 'File not found' })
  async getFile(@Query() query: any): Promise<StreamableFile> {
    const filePath = join(process.cwd(), 'uploads/'+query.Folder, query.Filename || 'package.json');

    try {
      // Check if file exists asynchronously before creating the stream
      await stat(filePath); 

      const file = createReadStream(filePath);
      return new StreamableFile(file, {
        type: query.Type || 'application/json',
        disposition: `attachment; filename="${query.OutputFileName || "package.json"}"`,
      });

    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new NotFoundException(`File not found at path: ${filePath}`);
      }
      throw new BadRequestException(`Error accessing file: ${error.message}`);
    }
  }

  @Get('delete')
  @ApiQuery({ name: 'filename', type: 'string', required: false, example: 'avatar.jpg' })
  @ApiQuery({ name: 'folder', type: 'string', required: false, example: 'pictures' })
  async remove(@Query('filename') filename: string, @Query('folder') folder: string) {
    const filePath = join(process.cwd(), 'uploads', folder || 'pictures', filename);
    try {
      await fs.promises.unlink(filePath);
      return { message: 'File deleted successfully' };
    } catch (err) {
      throw new NotFoundException(`File not found at path: ${filePath}`);
    }
  }

  // // Or even:
  // @Get('/p')
  // getFileChangingResponseObjDirectly(@Res({ passthrough: true }) res: Response): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'package.json'));
  //   res.set({
  //     'Content-Type': 'application/json',
  //     'Content-Disposition': `attachment; filename="package.json"`,
  //   });
  //   return new StreamableFile(file);
  // }

  // // Or even:
  // @Get('/image')
  // @Header('Content-Type', 'image/jpg')
  // @Header('Content-Disposition', 'attachment; filename="image.jpg"')
  // @ApiQuery({ name: 'filename', type: 'string', required: false, example: 'scene.jpg' })
  // getFileUsingStaticValues(@Query('filename') filename?: string, ): StreamableFile {
  //   console.log(filename);
    
  //   const file = createReadStream(join(process.cwd(),'uploads/pictures', ( filename || 'avatar.jpg')));
  //   return new StreamableFile(file);
  // }  
}
