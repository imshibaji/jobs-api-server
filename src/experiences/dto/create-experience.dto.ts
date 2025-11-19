import { ApiProperty } from "@nestjs/swagger";

export class CreateExperienceDto {
    @ApiProperty({ example: 'Google' })
    company: string;

    @ApiProperty({ example: 'Software Engineer' })
    position: string;

    @ApiProperty({ example: 'Developed a new feature for the company' })
    description: string;

    @ApiProperty({ example: ['JavaScript', 'React', 'Node.js'] })
    usedSkills: string[];

    @ApiProperty({ example: '2022-01-01' })
    startDate: Date;

    @ApiProperty({ example: '2022-12-31' })
    endDate?: Date | null;

    @ApiProperty({ example: 1 })
    applicantId: number;
}