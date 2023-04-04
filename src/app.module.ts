import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventosModule } from './eventos/eventos.module';
import { AddFieldsModule } from './add_fields/add_fields.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Datalat'), 
    EventosModule, AddFieldsModule, CatalogsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}