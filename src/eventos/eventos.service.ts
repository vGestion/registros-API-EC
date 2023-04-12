import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Evento, EventoDocument } from './schema/evento.schema';
import { Model } from 'mongoose';
import { AddField } from 'src/add_fields/schema/add_field.schema';
import { User } from 'src/user/schema/user.schema';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as qr from 'qr-image';
import { Response } from 'express';
import { Readable } from 'stream';

@Injectable()
export class EventosService {

  constructor(
    @InjectModel(Evento.name) private readonly EventoModel: Model<EventoDocument>,
  ) { }

  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    return this.EventoModel.create(createEventoDto);
  }

  async findAll(propiedad: string, orden: number): Promise<Evento[]> {

    const ordenar = {};
    ordenar[propiedad] = orden;

    return this.EventoModel.find().sort(ordenar).exec();
  }

  async findOne(id: string): Promise<Evento> {
    return this.EventoModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(updateEventoDto).exec();

  }

  async remove(id: string) {
    return this.EventoModel.findByIdAndRemove({ _id: id }).exec();
  }


  async addAditionalField(id: string, addField: AddField): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(
      { _id: id },
      { $push: { additional_fields: addField } },
      { new: true }
    ).exec();
  }

  async deleteAditionalField(id: string, campo: string): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(
      { _id: id },
      { $pull: { additional_fields: { af_name: campo } } },
      { new: true }
    ).exec();
  }

  async addUser(id: string, user: CreateUserDto): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(
      { _id: id },
      { $push: { users: user } },
      { new: true }
    ).exec();
  }

  async deleteUSer(id: string, idUser: string): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(
      { _id: id },
      { $pull: { users: { id_user: idUser } } },
      { new: true }
    ).exec();
  }

  async changeUserStatus(id: string, idUser: string, newStatus: string): Promise<Evento> {
    return this.EventoModel.findOneAndUpdate(
      {
        _id: id,
        "users.id_user": idUser
      },
      { $set: { "users.$.status": newStatus } },
      {new: true}
    ).exec();
  }


getQR(id: string, idUser: string, newStatus: string):Readable{
  const url =  "http://localhost:3001/eventos/updateUserStatus/"+id+"?idUser="+idUser+"&status="+newStatus; 
  const qr_png = qr.image(url,{type:'png',margin:2})
  return qr_png;
}

}