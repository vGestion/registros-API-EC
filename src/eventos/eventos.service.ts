import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Evento, EventoDocument } from './schema/evento.schema';
import { Model } from 'mongoose';
import { AddField } from 'src/add_fields/schema/add_field.schema';

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
    return this.EventoModel.findOneAndUpdate(updateEventoDto).exec();
    
  }

  async remove(id: string) {
    return this.EventoModel.findByIdAndRemove({ _id: id }).exec();
  }


  async addAditionalField(id: string, addField: AddField):Promise<Evento>{
    return this.EventoModel.findOneAndUpdate(
      { _id: id},
      { $push: {additional_fields:addField}},
      { new: true }
    ).exec();
  }

  async deleteAditionalField(id: string, campo: string):Promise<Evento>{
    return this.EventoModel.findOneAndUpdate(
      { _id: id},
      { $pull: {additional_fields:{af_name: campo}}},
      { new: true }
    ).exec();
  }
}