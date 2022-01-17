import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Rol extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_rol: number;

    @Column({type: 'text', nullable: false})
    descripcion: string;

}