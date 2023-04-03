import { Module } from '@nestjs/common';
import { AddFieldsService } from './add_fields.service';
import { AddFieldsController } from './add_fields.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AddField, AddFieldMCSchema, AddFieldTextSchema,AddFieldNumberSchema, AddFieldUploadFSchema } from './schema/add_field.schema';

@Module({
  imports: [ MongooseModule.forFeature(
    [
      { name: AddField.name, schema: AddFieldMCSchema },
      { name: AddField.name, schema: AddFieldTextSchema },
      { name: AddField.name, schema: AddFieldNumberSchema },
      { name: AddField.name, schema: AddFieldUploadFSchema }
    ]), 
  ],
  controllers: [AddFieldsController],
  providers: [AddFieldsService]
})
export class AddFieldsModule {}
