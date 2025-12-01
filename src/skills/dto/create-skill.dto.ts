import { ApiProperty } from "@nestjs/swagger";

export class CreateSkillDto {
    @ApiProperty({ example: 'JavaScript' })
    name: string;

    @ApiProperty({ example: 'Advanced' })
    proficiency: string;

    @ApiProperty({ example: '3 years' })
    experience: string;

    @ApiProperty({ example: '2022-01-01' })
    lastUsed?: Date;

    @ApiProperty({ example: 1 })
    applicantId: number;

    @ApiProperty({ example: false })
    isDeleted: boolean;
}