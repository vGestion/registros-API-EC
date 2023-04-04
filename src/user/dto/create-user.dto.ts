import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty() 
    id_user: string;
  
    @ApiProperty()
    status: string;
  
    @ApiProperty()
    additional_fields: [
      {
          name:string,
          value: string
      }
    ]
}
