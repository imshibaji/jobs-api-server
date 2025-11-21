import { ApiProperty } from "@nestjs/swagger";
import { Base } from "./base.dto";

export class WebhookDto extends Base{
    @ApiProperty({ type: String, required: true, description: 'webhook name', example: 'Jobs Portal' })
    name: string;
    @ApiProperty({ type: String, required: true, description: 'webhook url', example: 'http://localhost:3300/auth/login' })
    url: string;

    @ApiProperty({ type: String, required: false, description: 'webhook headers', example: JSON.parse('{"accept": "*/*", "Content-Type": "application/json"}') })
    headers?: any;

    @ApiProperty({ type: String, required: false, description: 'webhook secret', example: 'secret' })
    secret?: string;

    @ApiProperty({ type: String, required: false, description: 'webhook method', example: 'POST' })
    method?: string;

    @ApiProperty({ type: String, required: false, description: 'webhook data', example: JSON.parse(`{ "username": "admin@abc.com", "password": "password" }`) })
    data?: any;

    @ApiProperty({ type: String, required: false, description: 'Webhook type', example: 'webhook' })
    type?: String = 'webhook';
}