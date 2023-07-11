import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import { AddField } from 'src/add_fields/schema/add_field.schema';
import { User } from 'src/user/schema/user.schema';

export type EventoDocument = Evento & Document; 

@Schema() 
export class Evento {
  @Prop() 
  name: string;

  @Prop()
  description: string;

  @Prop()
  start: Date;

  @Prop()
  end: Date;

  @Prop()
  place: string;

  @Prop()
  time: string;

  @Prop()
  category: string;

  @Prop()
  imagen: string;

  @Prop()
  modality: string;

  @Prop()
  approval: Boolean;

  @Prop()
  survey: string;

  @Prop()
  additional_fields: [AddField]

  @Prop()
  users: [User]
}

export const EventoSchema = SchemaFactory.createForClass(Evento); 