import { Module } from '@nestjs/common';
import { AddFieldsService } from './add_fields.service';
import { AddFieldsController } from './add_fields.controller';

@Module({
  controllers: [AddFieldsController],
  providers: [AddFieldsService]
})
export class AddFieldsModule {}
