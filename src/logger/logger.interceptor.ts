import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let request;

    // 1. Check if the call is coming from GraphQL
    if (context.getType<string>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      request = gqlContext.getContext().req;
      // In GraphQL, the "body" (variables) is usually in gqlContext.getArgs()
      const args = gqlContext.getArgs();
      // console.log('GraphQL Args:', args); // Log GraphQL arguments
    } else {
      // 2. Standard REST call
      request = context.switchToHttp().getRequest();
    }

    return next.handle().pipe(
      map((data) => {
        // 3. Safe check before reading properties
        const body = request?.body || {}; 
        // console.log('Request Body:', body); // Log the request body for both REST and GraphQL (if available)
        // Add your logging logic here
        // console.log('Response Data:', data); // Log the response data

        return data;
      }),
    );
  }
}
