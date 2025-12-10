import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/role.enum";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class SignUpDto {
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

export class LoginDto {
  @ApiProperty({ type: String, required: true , description: 'use the email as username' })
  username: string;
  @ApiProperty({ type: String, required: true, description: 'user password' })
  password: string;
}


export class JwtPayload {
  @ApiProperty({ type: Number, required: true, description: 'user id' })
  sub: number;
  @ApiProperty({ type: Object, required: true, description: 'user details' })
  user: CreateUserDto;
}

export class JwtToken {
  access_token: string;
}