import { ApiProperty } from "@nestjs/swagger";

export class CreateApplicantDto {
    @ApiProperty({ example: 'Jane Doe' })
    name: string;

    @ApiProperty({ example: 'https://example.com/image.jpg' })
    image: string;
    
    @ApiProperty({ example: '123 Main St' })
    address: string;

    @ApiProperty({ example: 'Springfield' })
    city: string;

    @ApiProperty({ example: 'IL' })
    state: string;

    @ApiProperty({ example: 'USA' })
    country: string;

    @ApiProperty({ example: '12345' })
    zipCode: string;

    @ApiProperty({ example: 'I am a software developer with 5 years of experience.' })
    bio: string;

    @ApiProperty({ example: '1990-01-01' })
    dob: string;

    @ApiProperty({ example: 'Female' })
    gender: string;

    @ApiProperty({ example: 'jane@example.com' })
    email: string;

    @ApiProperty({ example: '+1-555-1234' })
    phoneNumber: string;

    @ApiProperty({ example: 'JavaScript, React, Node.js' })
    skills: string;

    @ApiProperty({ example: '2 years' })
    experience: string;

    @ApiProperty({ example: '123 Main St' })
    location: string;

    @ApiProperty({ example: 'https://example.com/resume.pdf' })
    resume: string;

    @ApiProperty({ example: false })
    isDeleted: boolean;

    @ApiProperty({ example: 1 })
    userId: number;
}
