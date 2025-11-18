import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/role.enum";

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
}

export class LoginDto {
  @ApiProperty({ type: String, required: true , description: 'use the email as username' })
  username: string;
  @ApiProperty({ type: String, required: true, description: 'user password' })
  password: string;
}

export class JwtPayload {
  username: string;
  sub: number;
}

export class JwtToken {
  access_token: string;
}