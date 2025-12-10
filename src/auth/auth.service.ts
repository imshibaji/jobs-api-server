import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtPayload, SignUpDto } from './utils/auth.types';
import { hashPassword, verifyPassword } from './utils/encryption';
import { UpdateResult } from 'typeorm';
import { Request } from 'express';
import { sendEmail } from './utils/communications';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signUp(user: SignUpDto): Promise<any> {
        const userExists = await this.usersService.findByEmail(user.email);
        const phoneNumberExists = await this.usersService.findByPhoneNumber(user.phoneNumber!);
        if (userExists) {
            throw new UnauthorizedException('User already exists');
        }
        if (phoneNumberExists) {
            throw new UnauthorizedException('Phone number already exists');
        }
        
        const { password, ...result } = await this.usersService.create({
            email: user.email,
            name: user.name,
            phoneNumber: user.phoneNumber,
            password: await hashPassword(user.password),
            image: user.image,
            role: user.role,
        });
        const payload = { sub: result.id, user: {
            name: result.name,
            email: result.email,
            phoneNumber: result.phoneNumber,
            image: result.image,
            role: result.role,
        }};
        await this.usersService.update(result.id!, { isOnline: true });
        return {
            access_token: await this.jwtService.signAsync(payload),
            // user: result
        };
    }

    async signIn(email: string, pass: string): Promise<any> {
        try {
            const user = await this.usersService.findByEmail(email);
            // if (user?.password !== pass) {
            //     throw new UnauthorizedException();
            // }
            if(user && user.email === email && !await verifyPassword(pass, user.password)) {
                throw new UnauthorizedException();
            }
            const payload = { sub: user?.id, user:{
                name: user?.name,
                email: user?.email,
                phoneNumber: user?.phoneNumber,
                image: user?.image,
                role: user!.role,
            }};
            await this.usersService.update(user?.id!, { isOnline: true });
            return {
                access_token: await this.jwtService.signAsync(payload),
                // user,
            };
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    async signOut(request: Request): Promise<boolean> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        await this.usersService.update(userId, { isOnline: false });
        return true;
    }

    async forgetPassword(email: string): Promise<String> {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException();
        }
        await sendEmail(email, 'Reset Password', process.env.APP_URL + `/reset-password/?id=${user.id?.toString()}`);
        return 'success';
    }

    async resetPassword(userId: string, newPassword: string): Promise<UpdateResult> {
        const id = parseInt(userId);
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new UnauthorizedException();
        }
        const hashedPassword = await hashPassword(newPassword);
        return await this.usersService.update(id, { password: hashedPassword, updatedAt: new Date()});
    }

    async changePassword(request: any, newPassword: string): Promise<UpdateResult> {
        const hashedPassword = await hashPassword(newPassword);
        const user = request.user;
        const userId = user.sub;
        return await this.usersService.update(userId, { password: hashedPassword, updatedAt: new Date()});
    }

    async changeEmail(request: Request, newEmail: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { email: newEmail, updatedAt: new Date() });
    }

    async changeName(request: Request, newName: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { name: newName, updatedAt: new Date() });
    }

    async changePhoneNumber(request: Request, newPhoneNumber: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { phoneNumber: newPhoneNumber, updatedAt: new Date() });
    }

    async changeImage(request: Request, newImage: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { image: newImage, updatedAt: new Date() });
    }

    async changeRole(request: Request, newRole: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { role: newRole, updatedAt: new Date() });
    }

    async changePasswordAndEmail(request: Request, newPassword: string, newEmail: string): Promise<UpdateResult> {
        const hashedPassword = await hashPassword(newPassword);
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { password: hashedPassword, email: newEmail, updatedAt: new Date() });
    }

    async changeInstagramId(request: Request, newInstagramId: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { instagramId: newInstagramId, updatedAt: new Date() });
    }

    async changeFacebookId(request: Request, newFacebookId: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { facebookId: newFacebookId, updatedAt: new Date() });
    }

    async changeYoutubeId(request: Request, newYoutubeId: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { youtubeId: newYoutubeId, updatedAt: new Date() });
    }

    async changeLinkedinId(request: Request, newLinkedinId: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { linkedinId: newLinkedinId, updatedAt: new Date() });
    }

    async changeGithubId(request: Request, newGithubId: string): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { githubId: newGithubId, updatedAt: new Date() });
    }

    async changeOnlineStatus(request: Request, newOnlineStatus: boolean): Promise<UpdateResult> {
        const user = request.user as JwtPayload;
        const userId = user?.sub as number;
        return await this.usersService.update(userId, { isOnline: newOnlineStatus, updatedAt: new Date() });
    }

    async encryptPassword(text: string): Promise<string> {
        return await hashPassword(text);
    }

    async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        return await verifyPassword(password, hashedPassword);
    }
}
