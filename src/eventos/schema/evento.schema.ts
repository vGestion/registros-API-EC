import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import { AddField } from 'src/add_fields/schema/add_field.schema';

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
  category: string;

  @Prop()
  image: string;

  @Prop()
  modality: string;

  @Prop()
  approval: Boolean;

  @Prop()
  survey: string;

  @Prop()
  additional_fields: [AddField]
}

export const EventoSchema = SchemaFactory.createForClass(Evento); 