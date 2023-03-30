import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

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
  approval: Boolean;

  @Prop()
  survey: string;

  @Prop()
  additional_fields: []
}

export const AddFieldMCSchema = SchemaFactory.createForClass(Evento); 
