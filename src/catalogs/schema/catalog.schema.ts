import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type CatalogDocument = Catalog & Document; 

@Schema()
export class Catalog {
    @Prop()
    category: string

    @Prop()
    options:[]
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog); 