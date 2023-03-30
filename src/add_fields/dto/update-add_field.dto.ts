import { PartialType } from '@nestjs/swagger';
import { CreateAddFieldDto } from './create-add_field.dto';

export class UpdateAddFieldDto extends PartialType(CreateAddFieldDto) {}
