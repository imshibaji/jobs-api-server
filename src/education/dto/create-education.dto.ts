import { ApiProperty } from "@nestjs/swagger";

export class CreateEducationDto {
    @ApiProperty()
    institution: string;

    @ApiProperty()
    degree: string;

    @ApiProperty()
    fieldOfStudy: string;

    @ApiProperty({ required: false })
    grade?: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty({ required: false })
    endDate?: Date;
}