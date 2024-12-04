import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule, PropertyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsproperty',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
