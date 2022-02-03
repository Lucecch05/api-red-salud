import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Prestador } from "../prestador/prestador.entity";

@Entity('especialidades')
export class Especialidad extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id_especialidad: number;
    
    @OneToMany(() => Prestador, (prestadores: Prestador) => prestadores.especialidad ,{eager: true})
    prestadores: Prestador[];

    @Column({type: 'text', nullable: false})
    descripcion: string;
}