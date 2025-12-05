import { PartialType } from '@nestjs/swagger';
import { CreateJoiningDto } from './create-joining.dto';

export class UpdateJoiningDto extends PartialType(CreateJoiningDto) {}
