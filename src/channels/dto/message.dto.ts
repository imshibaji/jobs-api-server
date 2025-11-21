import { ApiProperty } from "@nestjs/swagger";
import { Base } from "./base.dto";

export class MessageDto extends Base {
    @ApiProperty({ type: String, required: true, description: 'phone number', example: '1234567890' })
    to: string;

    @ApiProperty({ type: String, required: true, description: 'message', example: 'Welcome to Jobs Portal'})
    message: string;

    @ApiProperty({ type: String, required: false, description: 'message sender name', example: 'Jobs Portal' })
    name?: string;

    @ApiProperty({ type: String, required: false, description: 'message sender name', example: '91234567890' })
    from?: string;

    @ApiProperty({ type: String, required: false, description: 'message attachment', example: 'https://example.com/attachment.pdf' })
    attachment?: string;

    @ApiProperty({ type: String, required: false, description: 'Template type', example: 'message' })
    type: string = 'message';
}