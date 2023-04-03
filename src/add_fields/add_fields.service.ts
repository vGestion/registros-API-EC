import { Injectable } from '@nestjs/common';
import { CreateAddFieldDto } from './dto/create-add_field.dto';
import { UpdateAddFieldDto } from './dto/update-add_field.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AddField, AddFieldDocument } from './schema/add_field.schema';
import { Model } from 'mongoose';

@Injectable()
export class AddFieldsService {

  constructor( 
    @InjectModel(AddField.name) private readonly AddFieldModel: Model<AddFieldDocument>, 
  ) {}

  create(createAddFieldDto: CreateAddFieldDto): Promise<AddField> {
    return this.AddFieldModel.create(createAddFieldDto);
  }

  findAll() :Promise<AddField[]>{
    return this.AddFieldModel.find().exec();
  }

  findOne(id: number):Promise<AddField> {
    return this.AddFieldModel.findOne({ _id: id }).exec(); 
  }

  update(id: number, updateAddFieldDto: UpdateAddFieldDto):Promise<AddField> {
    return this.AddFieldModel.findOneAndUpdate({ _id: id }, updateAddFieldDto, { 
      new: true, 
    });
  }

  remove(id: number) {
    return this.AddFieldModel.findByIdAndRemove({ _id: id }).exec();
  }
}
