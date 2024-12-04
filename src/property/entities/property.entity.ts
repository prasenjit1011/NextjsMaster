import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_property')
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(()=>User, (user)=>user.likedProperties)
    likedBy: User[];
}
