import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
    @ApiProperty({ required: true, example: 'Tech Solutions Ltd.' })
    name: string;

    @ApiProperty({ required: false, example: 'https://example.com/logo.png' })
    image?: string;

    @ApiProperty({ required: false, example: '123 Tech Street' })
    address?: string;

    @ApiProperty({ required: false, example: 'Tech City' })
    city?: string;

    @ApiProperty({ required: false, example: 'Tech State' })
    state?: string;

    @ApiProperty({ required: false, example: 'Tech Country' })
    country?: string;

    @ApiProperty({ required: true, example: '+1234567890' })
    phoneNumber: string;

    @ApiProperty({ required: true, example: 'qTg9Y@example.com' })
    email: string;

    @ApiProperty({ required: false, example: 'https://techsolutions.com' })
    website?: string;

    @ApiProperty({ required: true, example: 1 })
    userId: number;
}