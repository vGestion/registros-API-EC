import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { CreateAddFieldDto } from 'src/add_fields/dto/create-add_field.dto';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  /* Método para obtener todos los eventos ordenados donde 
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
}
