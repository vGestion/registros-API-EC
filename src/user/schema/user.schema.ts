import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type UserDocument = User & Document; 

@Schema() 
export class User {
  @Prop() 
  id_user: string;

  @Prop()
  status: string;

  @Prop()
  additional_fields: [
    {
        name:string,
        value: string
    }
  ]
}

export const UserSchema = SchemaFactory.createForClass(User); 
