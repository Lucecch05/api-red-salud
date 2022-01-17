import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('especialidades')
export class Especialidad extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_especialidad: number;

    @Column({type: 'text', nullable: false})
    descripcion: string;
}