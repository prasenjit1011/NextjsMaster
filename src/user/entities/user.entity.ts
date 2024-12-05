import { Property } from "src/property/entities/property.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @ManyToMany(()=>Property, (property)=>property.likedBy)
    @JoinTable({
        name:'tbl_user_property',
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'propertyId',
            referencedColumnName: 'id',
        },
    })
    likedProperties:Property[];

}
