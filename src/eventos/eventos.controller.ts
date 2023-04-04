import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { AddField } from 'src/add_fields/schema/add_field.schema';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  /* Función para obtener todos los eventos ordenados donde 
     propiedad: nombre del campo json en base al cual se desea ordenar
     orden: 1 si es ascendente, -1 si es descendente
  */

  @Get()
  findAll(@Query('propiedad') propiedad: string, @Query('orden') orden: number) {
    return this.eventosService.findAll(propiedad,orden);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(id, updateEventoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosService.remove(id);
  }

  @Post('/addField/:id')
  addOneField(@Param('id') id: string, @Body() addField: AddField){
    return this.eventosService.addAditionalField(id,addField);
  }

  @Delete('/deleteField/:id')
  deleteOneField(@Query('campo') campo: string,@Param('id') id: string){
    return this.eventosService.deleteAditionalField(id,campo);
  }
}
