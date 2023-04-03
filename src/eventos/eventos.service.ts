import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Evento, EventoDocument } from './schema/evento.schema';
import { Model } from 'mongoose';

@Injectable()
export class EventosService {

  constructor( 
    @InjectModel(Evento.name) private readonly EventoModel: Model<EventoDocument>, 
  ) {}

  async create(createEventoDto: CreateEventoDto):Promise<Evento> {
    return this.EventoModel.create(createEventoDto);
  }

  async findAll(propiedad: string, orden :number):Promise<Evento[]> {
    
    const ordenar = {};
    ordenar[propiedad] = orden;

    return this.EventoModel.find().sort(ordenar).exec();
  }

  async findOne(id: string):Promise<Evento> {
    return this.EventoModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateEventoDto: UpdateEventoDto):Promise<Evento> {
    return this.EventoModel.findOneAndUpdate( updateEventoDto);
    
  }

  async remove(id: string) {
    return this.EventoModel.findByIdAndRemove({ _id: id }).exec();
  }
}
