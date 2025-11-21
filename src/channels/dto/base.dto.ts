import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { dateTime } from "src/utils/dateTime";

export class Base{
    @ApiProperty({ type: String, required: false, description: 'Template id', example: randomUUID() })
    id?: string | number;

    @ApiProperty({ type: String, description: 'Template category', example: 'notification' })
    category?: string;

    @ApiProperty({ type: Date, required: false, description: 'push notification date time', example: dateTime() })
    dateTime?: string;

    @ApiProperty({ type: String, description: 'Template type', example: 'email' })
    type?: String;
}