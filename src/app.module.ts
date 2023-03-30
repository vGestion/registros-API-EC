import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventosModule } from './eventos/eventos.module';
import { AddFieldsModule } from './add_fields/add_fields.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Datalat'), 
    EventosModule, AddFieldsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}