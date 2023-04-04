import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {

  constructor( 
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>, 
  ) {}

  async create(createUserDto: CreateUserDto):Promise<User> {
    return this.UserModel.create(createUserDto);
  }

  async findAll():Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(id: number):Promise<User> {
    return this.UserModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findOneAndUpdate(updateUserDto).exec();
  }

  async remove(id: string) {
    return this.UserModel.findByIdAndRemove({ _id: id }).exec();
  }
}
