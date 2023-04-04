import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';
import { Catalog, CatalogDocument } from './schema/catalog.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatalogsService {

  constructor( 
    @InjectModel(Catalog.name) private readonly CatalogModel: Model<CatalogDocument>, 
  ) {}

  create(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.CatalogModel.create(createCatalogDto);
  }

  findAll():Promise<Catalog[]> {
    return this.CatalogModel.find().exec();
  }

  findOne(id: string):Promise<Catalog> {
    return this.CatalogModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateCatalogDto: UpdateCatalogDto):Promise<Catalog> {
    return this.CatalogModel.findByIdAndUpdate(updateCatalogDto).exec();
  }

  remove(id: string) {
    return this.CatalogModel.findByIdAndRemove({ _id: id }).exec();
  }
}
