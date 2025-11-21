import { Controller, Get, StreamableFile, Query, Header, NotFoundException, BadRequestException } from '@nestjs/common';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';
// import type { Response } from 'express'; // Assuming that we are using the ExpressJS HTTP Adapter
import { Public } from 'src/auth/auth.decorator';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { stat } from 'node:fs/promises';

@Public()
@ApiTags('Download File')
@Controller('file')
export class FileController {
  @Get()
  @ApiQuery({ name: 'Folder', type: 'string', required: false, example: 'uploads/pictures' })
  @ApiQuery({ name: 'Type', type: 'string', required: false, example: 'image/jpg' })
  @ApiQuery({ name: 'Filename', type: 'string', required: false, example: 'avatar.jpg' })
  @ApiQuery({ name: 'OutputFileName', type: 'string', required: false, example: 'image.jpg' })
  @Header('access-control-allow-origin', '*')
  async getFile(@Query() query: any): Promise<StreamableFile> {
    const filePath = join(process.cwd(), query.Folder || 'uploads', query.Filename || 'package.json');

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
