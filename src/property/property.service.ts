import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private readonly propertyRepository:Repository<Property>
  ){}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  async findAll() {
    let cond = {relations:['likedBy']};
    let data = await this.propertyRepository.find(cond);
    return {msg:`This action returns all property`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
