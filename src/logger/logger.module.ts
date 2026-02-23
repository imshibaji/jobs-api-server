import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerController } from './logger.controller';
import { LoggerInterceptor } from './logger.interceptor';

@Module({
  providers: [LoggerService, LoggerInterceptor],
  controllers: [LoggerController],
  exports: [LoggerService, LoggerInterceptor],
})
export class LoggerModule {}
