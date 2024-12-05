import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LikeDataDto } from './dto/likedata.dto';
import { Property } from 'src/property/entities/property.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>,
    @InjectRepository(Property) private readonly propertyRepository:Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    let data;
    return {msg:'This action adds a new user', data};
  }

  async findAll() {
    let cond = {relations:['likedProperties']};
    let data = await this.userRepository.find(cond);
    return {msg:`This action returns all user`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async addLikePropertyToUser(likeDataDto:LikeDataDto){
    console.clear();

    console.log('\n\n=================================')
    console.log('likeDataDto : userId : ', likeDataDto?.userId, '  || propertyId : ', likeDataDto?.propertyId);

    let condProp  = {where:{id:likeDataDto?.propertyId}};
    let propData  = await this.propertyRepository.findOne(condProp);

    let condUser  = {where:{id:likeDataDto?.userId}, relations:['likedProperties']};
    let userData  = await this.userRepository.findOne(condUser);

    if (!userData || !propData) {
      //throw new Error('User or Property not found');
      return {status: false, msg: 'User or Property not found'};
    }

    if (propData instanceof Property) {
      if (!userData.likedProperties) {
        userData.likedProperties = [];
      }

      userData.likedProperties = [...userData.likedProperties, propData];
      let userDetails   = await this.userRepository.save(userData);
      let userProperty  = await this.userRepository.findOne(condUser);

      console.log('==== userDetails : ', userProperty);
      return {status:true, userProperty};
    } 
    else {
      throw new Error('The provided data is not a valid Property.');
    }



  }






    //userData.likedProperties = [...userData.likedProperties, propData];


    // console.clear();
    // console.log('=======================')
    // console.log(userData);
    // console.log(propData);
    // const x = [userData];
    // console.log('===========')
    // console.log('===========')
    // //userData.likedProperties = [...userData.likedProperties, propData];

    // //let user:User = new User();
    // //user.tb


    // let userProperty:LikeDataDto = new LikeDataDto();
    // userProperty.userId = likeDataDto.userId;
    // userProperty.propertyId = likeDataDto.propertyId;

    // let data;
    // //let data = await this.userRepository.save(userProperty);
    // console.log('Iamhere : Boss')

    // return {msg:`Property liked successfully`, data};
  

  async zaddLikePropertyToUser(userId: number, propertyId: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });

    if (!user || !property) {
      throw new Error('User or Property not found');
    }

    // Manually add the property to the user's liked properties
    //user.likedProperties = [...user.likedProperties, property];

    // Save the updated user entity (this will update the junction table automatically)
    await this.userRepository.save(user);
  }




}
