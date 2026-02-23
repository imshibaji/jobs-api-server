import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_LOCKED, IS_PUBLIC_KEY } from './auth.decorator';
import { jwtConstants } from './utils/constants';
import { Request } from 'express';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const isLocked = this.reflector.getAllAndOverride<boolean>(IS_LOCKED, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isLocked) {
      throw new UnauthorizedException('Locked access');
    }

    let request;
    // Check if the context is GraphQL
    if (context.getType<string>() === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      request = gqlContext.getContext().req;
    } else {
      request = context.switchToHttp().getRequest();
    }

    // Safety check: if request is missing (e.g. malformed context)
    if (!request) {
      throw new UnauthorizedException('No request context found');
    }

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Missing token');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // console.log(request);

    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    // console.log(type, token);

    return type === 'Bearer' ? token : undefined;
  }
}
