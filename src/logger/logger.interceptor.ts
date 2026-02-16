import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const reqBody = context.switchToHttp().getRequest().body;
        // console.log(reqBody);
        // console.log(data);
        
        return data;
      })
    );
  }
}
