import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginDto, SignUpDto } from './utils/auth.types';
import { Public } from './auth.decorator';
import { ApiBearerAuth, ApiBody, ApiProperty } from '@nestjs/swagger';
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
    @HttpCode(HttpStatus.CREATED)
    @ApiBody({ type: SignUpDto, description: 'User registration credentials',
        examples: {
            example1: {
                summary: 'Example credentials',
                value: '{"email":"user1@example.com","password":"password123","phoneNumber":"1234567890","name":"John Doe","image":"https://example.com/user.jpg","role":"admin"}',
            },        
            example2: {
                summary: 'Another example credentials',
                value: '{"email":"user2@example.com","password":"mySecret456","phoneNumber":"0987654321","name":"Jane Smith","image":"https://example.com/user2.jpg","role":"user"}',
            },
        }
    })
    signUp(@Body() signUpDto: SignUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: LoginDto, description: 'User login credentials', examples: {
        example1: {
            summary: 'Example credentials',
            value: '{"username":"admin@abc.com","password":"password"}',
        },
        example2: {
            summary: 'Another example credentials',
            value: '{"username":"user@abc.com","password":"password"}',
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
    @Public()
    @Post('forget-password')
    @ApiBody({ type: Object, description: 'Email address', examples: {
        example1: {
            summary: 'Example email',
            value: '{"email":"user1@example.com"}',
        },
        example2: {
            summary: 'Another example email',
            value: '{"email":"user2@example.com"}',
        },
    } })
    async forgetPassword(@Body('email') email: string) {        
        return this.authService.forgetPassword(email);
    }

    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('reset-password/:id')
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
    async resetPassword(@Param('id') id: string, @Body('newPassword') newPassword: string) {        
        return this.authService.resetPassword(id, newPassword);
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

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-email')
    @ApiBody({ type: Object, description: 'New email', examples: {
        example1: {
            summary: 'Example new email',
            value: '{"newEmail":"newUser1@example.com"}',
        },
        example2: {
            summary: 'Another example new email',
            value: '{"newEmail":"newUser2@example.com"}',
        },
    }})
    async changeEmail(@Request() req: ExpressRequest, @Body('newEmail') newEmail: string) {        
        return this.authService.changeEmail(req, newEmail);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-name')
    @ApiBody({ type: Object, description: 'New name', examples: {
        example1: {
            summary: 'Example new name',
            value: '{"newName":"John Doe"}',
        },
        example2: {
            summary: 'Another example new name',
            value: '{"newName":"Jane Smith"}',
        },
    }})
    async changeName(@Request() req: ExpressRequest, @Body('newName') newName: string) {        
        return this.authService.changeName(req, newName);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-phone-number')
    @ApiBody({ type: Object, description: 'New phone number', examples: {
        example1: {
            summary: 'Example new phone number',
            value: '{"newPhoneNumber":"1234567890"}',
        },
        example2: {
            summary: 'Another example new phone number',
            value: '{"newPhoneNumber":"0987654321"}',
        },
    }})
    async changePhoneNumber(@Request() req: ExpressRequest, @Body('newPhoneNumber') newPhoneNumber: string) {        
        return this.authService.changePhoneNumber(req, newPhoneNumber);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-image')
    @ApiBody({ type: Object, description: 'New image', examples: {
        example1: {
            summary: 'Example new image',
            value: '{"newImage":"https://example.com/user.jpg"}',
        },
        example2: {
            summary: 'Another example new image',
            value: '{"newImage":"https://example.com/user2.jpg"}',
        },
    }})
    async changeImage(@Request() req: ExpressRequest, @Body('newImage') newImage: string) {        
        return this.authService.changeImage(req, newImage);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-role')
    @ApiBody({ type: Object, description: 'New role', examples: {
        example1: {
            summary: 'Example new role',
            value: '{"newRole":"admin"}',
        },
        example2: {
            summary: 'Another example new role',
            value: '{"newRole":"user"}',
        },
    }})
    async changeRole(@Request() req: ExpressRequest, @Body('newRole') newRole: string) {        
        return this.authService.changeRole(req, newRole);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-password-and-email')
    @ApiBody({ type: Object, description: 'New password and email', examples: {
        example1: {
            summary: 'Example new password and email',
            value: '{"newPassword":"newPassword123", "newEmail":"newUser1@example.com"}',
        },
        example2: {
            summary: 'Another example new password and email',
            value: '{"newPassword":"anotherNewPass456", "newEmail":"newUser2@example.com"}',
        },
    }})
    async changePasswordAndEmail(@Request() req: ExpressRequest, @Body('newPassword') newPassword: string, @Body('newEmail') newEmail: string) {        
        return this.authService.changePasswordAndEmail(req, newPassword, newEmail);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-instagram-id')
    @ApiBody({ type: Object, description: 'New instagram id', examples: {
        example1: {
            summary: 'Example new instagram id',
            value: '{"newInstagramId":"newInstagramId123"}',
        },
        example2: {
            summary: 'Another example new instagram id',
            value: '{"newInstagramId":"anotherNewInstagramId456"}',
        },
    }})
    async changeInstagramId(@Request() req: ExpressRequest, @Body('newInstagramId') newInstagramId: string) {        
        return this.authService.changeInstagramId(req, newInstagramId);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-facebook-id')
    @ApiBody({ type: Object, description: 'New facebook id', examples: {
        example1: {
            summary: 'Example new facebook id',
            value: '{"newFacebookId":"newFacebookId123"}',
        },
        example2: {
            summary: 'Another example new facebook id',
            value: '{"newFacebookId":"anotherNewFacebookId456"}',
        },
    }})
    async changeFacebookId(@Request() req: ExpressRequest, @Body('newFacebookId') newFacebookId: string) {        
        return this.authService.changeFacebookId(req, newFacebookId);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-youtube-id')
    @ApiBody({ type: Object, description: 'New youtube id', examples: {
        example1: {
            summary: 'Example new youtube id',
            value: '{"newYoutubeId":"newYoutubeId123"}',
        },
        example2: {
            summary: 'Another example new youtube id',
            value: '{"newYoutubeId":"anotherNewYoutubeId456"}',
        },
    }})
    async changeYoutubeId(@Request() req: ExpressRequest, @Body('newYoutubeId') newYoutubeId: string) {        
        return this.authService.changeYoutubeId(req, newYoutubeId);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-linkedin-id')
    @ApiBody({ type: Object, description: 'New linkedin id', examples: {
        example1: {
            summary: 'Example new linkedin id',
            value: '{"newLinkedinId":"newLinkedinId123"}',
        },
        example2: {
            summary: 'Another example new linkedin id',
            value: '{"newLinkedinId":"anotherNewLinkedinId456"}',
        },
    }})
    async changeLinkedinId(@Request() req: ExpressRequest, @Body('newLinkedinId') newLinkedinId: string) {        
        return this.authService.changeLinkedinId(req, newLinkedinId);
    }

    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Put('change-github-id')
    @ApiBody({ type: Object, description: 'New github id', examples: {
        example1: {
            summary: 'Example new github id',
            value: '{"newGithubId":"newGithubId123"}',
        },
        example2: {
            summary: 'Another example new github id',
            value: '{"newGithubId":"anotherNewGithubId456"}',
        },
    }})
    async changeGithubId(@Request() req: ExpressRequest, @Body('newGithubId') newGithubId: string) {        
        return this.authService.changeGithubId(req, newGithubId);
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

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('encrypt-password')
    async encryptPassword(@Body() body: any) {        
        return {
            encryptedText: await this.authService.encryptPassword(body.password),
        };
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: Object, description: 'Text to be verified', examples: {
        example1: {
            summary: 'Example text',
            value: '{"password":"password", "hashedPassword":"$2b$10$21VYtLaJLaDrAAyhrCL71OKplktSfekrlihZ5GJNYfPkkC3HzycjG"}',
        },
        example2: {
            summary: 'Another example text',
            value: '{"password":"mySecret123", "hashedPassword":"$2b$10$Lc7GpNKD1aPNPPdIbx7lCu16Hoccj5qpNbm5cXas503a0bs/HLwWm"}',
        },
    } })
    @Post('verify-password')
    async verifyPassword(@Body() body: any) {        
        return {
            varified: await this.authService.verifyPassword(body.password, body.hashedPassword),
        };
    }
}
