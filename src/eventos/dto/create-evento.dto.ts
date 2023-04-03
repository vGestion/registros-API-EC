import { ApiProperty } from "@nestjs/swagger";
import { AddField } from "src/add_fields/schema/add_field.schema";

export class CreateEventoDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    start: Date;

    @ApiProperty()
    end: Date;

    @ApiProperty()
    approval: Boolean;

    @ApiProperty()
    survey: string;

    @ApiProperty()
    additional_fields: [AddField]
}
