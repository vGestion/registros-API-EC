import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type AddFieldDocument = AddField & Document; 

@Schema() 
export class AddField {
  @Prop() 
  name: string;

  @Prop()
  description: string;
}

// Esquema para agregar preguntas de opción múltiple
@Schema()
export class AddFieldMC extends AddField{
    @Prop()
    opciones: string[]
}

// Esquema para agregar preguntas de texto
@Schema()
export class AddFieldText extends AddField{
    @Prop()
    max_long: number;
    @Prop()
    min_long: number;
}

// Esquema para agregar preguntas numéricas
@Schema()
export class AddFieldNumber extends AddField{
    @Prop()
    max: number;
    @Prop()
    min: number;
    //El tipo se refiere a entero, natural, decimal, etc ... 
    @Prop()
    type: string;
}

// Esquema para agregar preguntas que requieran subir un archivo
@Schema()
export class AddFieldUploadF extends AddField{
    @Prop()
    path:String;
}

export const AddFieldMCSchema = SchemaFactory.createForClass(AddFieldMC); 
export const AddFieldTextSchema = SchemaFactory.createForClass(AddFieldText); 
export const AddFieldNumberSchema = SchemaFactory.createForClass(AddFieldNumber); 
export const AddFieldUploadFSchema = SchemaFactory.createForClass(AddFieldUploadF); 