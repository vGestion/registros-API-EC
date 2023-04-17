import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { AddField } from 'src/add_fields/schema/add_field.schema';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Response } from 'express';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) { }

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
    return this.eventosService.findAll(propiedad, orden);
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
  addOneField(@Param('id') id: string, @Body() addField: AddField) {
    return this.eventosService.addAditionalField(id, addField);
  }

  @Delete('/deleteField/:id')
  deleteOneField(@Query('campo') campo: string, @Param('id') id: string) {
    return this.eventosService.deleteAditionalField(id, campo);
  }

  @Post('/addUser/:id')
  addUser(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.eventosService.addUser(id, createUserDto);
  }

  @Get('/updateUserStatus/:id')
  updateUserStatus(@Param('id') id: string, @Query('idUser') idUser: string, @Query('status') status: string) {
    return this.eventosService.changeUserStatus(id, idUser, status)
  }

  @Get('/generateQr/:id')
  getQr(@Param('id') id: string, @Query('idUser') idUser: string, @Query('status') status: string,@Res() res:Response) {
    const qr_png = this.eventosService.getQR(id,idUser,status);
    res.setHeader('Content-Type','image/png');
    qr_png.pipe(res)
  }

  @Post('/isRegistered')
  isRegistered(@Body() user: {id:string, idUser:string}){
    return this.eventosService.isRegistered(user.id,user.idUser);
  }
  
}
