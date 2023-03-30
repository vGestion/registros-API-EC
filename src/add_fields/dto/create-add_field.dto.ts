import { ApiProperty } from '@nestjs/swagger';

export class CreateAddFieldDto {
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
  additional_fields: []
}