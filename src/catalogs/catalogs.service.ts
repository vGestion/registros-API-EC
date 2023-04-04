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

  async create(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.CatalogModel.create(createCatalogDto);
  }

  async findAll():Promise<Catalog[]> {
    return this.CatalogModel.find().exec();
  }

  async findOne(id: string):Promise<Catalog> {
    return this.CatalogModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCatalogDto: UpdateCatalogDto):Promise<Catalog> {
    return this.CatalogModel.findByIdAndUpdate(updateCatalogDto).exec();
  }

  async remove(id: string) {
    return this.CatalogModel.findByIdAndRemove({ _id: id }).exec();
  }

  async addOption(option:string, catalog:string):Promise<Catalog>{
    this.CatalogModel.findOneAndUpdate(
      { category: catalog},
      { $push: {options:option}},
      { new: true }
    ).exec();
    return this.CatalogModel.findOne({ category: catalog });
  }

  async deleteOption(option:string, catalog:string):Promise<Catalog>{
    this.CatalogModel.findOneAndUpdate(
      { category: catalog},
      { $pull: {options:option}},
      { new: true }
    ).exec();
    return this.CatalogModel.findOne({ category: catalog });
  }
}
