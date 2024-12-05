import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { PropertyModule } from 'src/property/property.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PropertyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
