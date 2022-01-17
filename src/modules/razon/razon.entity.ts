import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('razones')
export class Razon extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_razon: number;

    @Column({type: 'text', nullable: false})
    descripcion: string;

}