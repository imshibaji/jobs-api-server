import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './utils/auth.types';
import { encryptText, hashPassword, varifyPassword } from './utils/encryption';
import { UpdateResult } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signUp(user: SignUpDto): Promise<any> {
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
        return {
            access_token: await this.jwtService.signAsync(payload),
            // user: result
        };
    }

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(username);
        // if (user?.password !== pass) {
        //     throw new UnauthorizedException();
        // }
        if(user?.password && !await varifyPassword(pass, user.password)) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user?.id, user:{
            name: user?.name,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            image: user?.image,
            role: user!.role,
        }};
        return {
            access_token: await this.jwtService.signAsync(payload),
            // user,
        };
    }

    async changePassword(request: any, newPassword: string): Promise<UpdateResult> {
        const hashedPassword = await hashPassword(newPassword);
        const user = request.user;
        const userId = user.sub;
        return await this.usersService.update(userId, { password: hashedPassword });
    }

    async encryptPassword(text: string): Promise<string> {
        return await hashPassword(text);
    }
}
