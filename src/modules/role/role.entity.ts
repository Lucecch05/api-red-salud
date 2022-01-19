import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('roles')
export class Rol extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_rol: number;

    @OneToMany(() => User, (users: User) => users.rol)
    users: User[];

    @Column({type: 'text', nullable: false})
    descripcion: string;

}