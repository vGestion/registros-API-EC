import { ApiProperty } from "@nestjs/swagger"

export class CreateCatalogDto {
    @ApiProperty()
    category: string

    @ApiProperty()
    options:[]
}
