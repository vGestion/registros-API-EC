import { Injectable } from '@nestjs/common';
import { CreateAddFieldDto } from './dto/create-add_field.dto';
import { UpdateAddFieldDto } from './dto/update-add_field.dto';

@Injectable()
export class AddFieldsService {
  create(createAddFieldDto: CreateAddFieldDto) {
    return 'This action adds a new addField';
  }

  findAll() {
    return `This action returns all addFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addField`;
  }

  update(id: number, updateAddFieldDto: UpdateAddFieldDto) {
    return `This action updates a #${id} addField`;
  }

  remove(id: number) {
    return `This action removes a #${id} addField`;
  }
}
