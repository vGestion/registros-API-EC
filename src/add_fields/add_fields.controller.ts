import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddFieldsService } from './add_fields.service';
import { CreateAddFieldDto } from './dto/create-add_field.dto';
import { UpdateAddFieldDto } from './dto/update-add_field.dto';

@Controller('add-fields')
export class AddFieldsController {
  constructor(private readonly addFieldsService: AddFieldsService) {}

  @Post()
  create(@Body() createAddFieldDto: CreateAddFieldDto) {
    return this.addFieldsService.create(createAddFieldDto);
  }

  @Get()
  findAll() {
    return this.addFieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addFieldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddFieldDto: UpdateAddFieldDto) {
    return this.addFieldsService.update(+id, updateAddFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addFieldsService.remove(+id);
  }
}
