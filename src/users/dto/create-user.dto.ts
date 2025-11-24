import { ApiProperty } from "@nestjs/swagger";

export enum Role {
    Admin = 'admin',
    Recruiter = 'recruiter',
    User = 'user',
}


export class CreateUserDto {
    @ApiProperty({ type: Number, required: true, description: 'user id' })
    id?: number;

    @ApiProperty({ type: String, required: true, description: 'user full name' })
    name: string;

    @ApiProperty({ type: String, required: true, description: 'user email address' })
    email: string;

    @ApiProperty({ type: String, required: false, description: 'user phone number' })
    phoneNumber?: string;

    @ApiProperty({ type: String, required: true, description: 'user password' })
    password: string;

    @ApiProperty({ type: String, required: false, description: 'user profile image URL' })
    image?: string;

    @ApiProperty({ type: String, required: false, enum: Role, default: Role.User, description: 'user role, either admin or user' })
    role?: Role;

    @ApiProperty({ type: String, required: false, description: 'user instagram ID' })
    instagramId?: string;

    @ApiProperty({ type: String, required: false, description: 'user facebook ID' })
    facebookId?: string;

    @ApiProperty({ type: String, required: false, description: 'user youtube ID' })
    youtubeId?: string;

    @ApiProperty({ type: String, required: false, description: 'user linkedin ID' })
    linkedinId?: string;

    @ApiProperty({ type: String, required: false, description: 'user github ID' })
    githubId?: string;
}