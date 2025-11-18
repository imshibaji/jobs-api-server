import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginDto, SignUpDto } from './utils/auth.types';
import { Public } from './auth.decorator';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import type{ Request as ExpressRequest} from 'express';

@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @HttpCode(HttpStatus.CREATED)
    @ApiBody({ type: SignUpDto, description: 'User registration credentials', examples: {
        example1: {
            summary: 'Example credentials',
            value: '{"email":"user1@example.com","password":"password123","phoneNumber":"1234567890","name":"John Doe","image":"https://example.com/user.jpg","role":"admin"}',
        },        
        example2: {
            summary: 'Another example credentials',
            value: '{"email":"user2@example.com","password":"mySecret456","phoneNumber":"0987654321","name":"Jane Smith","image":"https://example.com/user2.jpg","role":"user"}',
        },
    }})
    @Post('register')
    signUp(@Body() signUpDto: SignUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: LoginDto, description: 'User login credentials', examples: {
        example1: {
            summary: 'Example credentials',
            value: '{"username":"user1@example.com","password":"password123"}',
        },
        example2: {
            summary: 'Another example credentials',
            value: '{"username":"user2@example.com","password":"mySecret456"}',
        },
    } })
    @Post('login')
    signIn(@Body() signInDto: LoginDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: ExpressRequest) {       
        return req.user;
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post('change-password')
    @ApiBody({ type: Object, description: 'New password', examples: {
        example1: {
            summary: 'Example new password',
            value: '{"newPassword":"newPassword123"}',
        },
        example2: {
            summary: 'Another example new password',
            value: '{"newPassword":"anotherNewPass456"}',
        },
    }})
    async changePassword(@Request() req: ExpressRequest, @Body('newPassword') newPassword: string) {        
        return this.authService.changePassword(req, newPassword);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: Object, description: 'Text to be encrypted', examples: {
        example1: {
            summary: 'Example text',
            value: '{"password":"password"}',
        },
        example2: {
            summary: 'Another example text',
            value: '{"password":"mySecret123"}',
        },
    } })
    @Post('encrypt-password')
    async encryptPassword(@Body() body: any) {        
        return {
            encryptedText: await this.authService.encryptPassword(body.password),
        };
    }
}
