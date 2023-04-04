import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose'; 

export type CatalogDocument = Catalog & Document; 

@Schema()
export class Catalog {

    @Prop()
    category: string

    @Prop()
    options:[String]
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog); 