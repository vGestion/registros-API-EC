import { ApiProperty } from '@nestjs/swagger';

export class CreateAddFieldDto {
  @ApiProperty() 
  name: string;

  @ApiProperty()
  description: string;

}

export class AddFieldMC extends CreateAddFieldDto{
  @ApiProperty()
  opciones: string[]
}

export class AddFieldText extends CreateAddFieldDto{
  @ApiProperty()
  max_long: number;

  @ApiProperty()
  min_long: number;
}

export class AddFieldNumber extends CreateAddFieldDto{
  @ApiProperty()
  max: number;

  @ApiProperty()
  min: number;

  @ApiProperty()
  type: string;
}

export class AddFieldUploadF extends CreateAddFieldDto{
  @ApiProperty()
  path:String;
}