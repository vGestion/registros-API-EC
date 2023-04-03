import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEventoDto } from './create-evento.dto';
import { AddField } from 'src/add_fields/schema/add_field.schema';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
    @ApiProperty()
    additional_fields: [AddField]
}
