import { Injectable, NestMiddleware } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: LoggerService) {}
  use(req: any, res: any, next: () => void) {
    // Capture the response details
    res.on('finish', () => {
      this.logger.log({
        request: {
          method: req.method,
          url: req.originalUrl,
          headers: req.headers,
          body: req.body,
          params: req.params,
          query: req.query,
          cookies: req.cookies,
          agent: req.headers['user-agent'],
          referer: req.headers.referer,
        },
        response: {
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          headers: res.getHeaders(),
          body: res.body,
        },
        timestamp: new Date().toISOString(),
      });
    });
    next();
  }
}
