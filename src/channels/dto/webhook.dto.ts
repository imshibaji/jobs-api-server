import { ApiProperty } from "@nestjs/swagger";
import { Base } from "./base.dto";

export class WebhookDto extends Base{
    @ApiProperty({ type: String, required: true, description: 'webhook name', example: 'Jobs Portal' })
    name: string;
    @ApiProperty({ type: String, required: true, description: 'webhook url', example: 'https://example.com/webhook' })
    url: string;

    @ApiProperty({ type: String, required: false, description: 'webhook headers', example: '"Content-Type": "application/json"' })
    headers?: any;

    @ApiProperty({ type: String, required: false, description: 'webhook secret', example: 'secret' })
    secret?: string;

    @ApiProperty({ type: String, required: false, description: 'webhook method', example: 'POST' })
    method?: string;

    @ApiProperty({ type: String, required: false, description: 'webhook data', example: JSON.parse(`{"name": "Jobs Portal"}`) })
    data?: any;

    @ApiProperty({ type: String, required: false, description: 'Webhook type', example: 'webhook' })
    type?: String = 'webhook';
}