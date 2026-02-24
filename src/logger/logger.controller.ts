import { Controller, Sse } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { Public } from '../auth/auth.decorator';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Public()
  @Sse('events')
  observe() {
    return this.loggerService.observe();
  }
}
